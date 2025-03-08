const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin"); // ✅ Make sure this is imported
const db = require("./firebaseConfig");  // ✅ Ensure this points to the correct Firestore setup

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Ensure admin is initialized in firebaseConfig.js
//admin.initializeApp();

// Middleware to Verify Firebase Authentication Token
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; // Attach user info to request
    next();
  } catch (error) {
    return res.status(403).json({ error: "Forbidden: Invalid token" });
  }
};

// Protected POST Route: Add a Food Donation
app.post("/donate", verifyToken, async (req, res) => {
  try {
    const { donor, foodType, quantity, expiration, location } = req.body;
    
    await db.collection("donations").add({
      donor,
      foodType,
      quantity,
      expiration,
      location,
      userId: req.user.uid, // Attach authenticated user ID
      timestamp: new Date(),
    });

    res.status(201).json({ message: "Donation added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Secure Fetch Donations Endpoint
app.get("/donations", verifyToken, async (req, res) => {
  try {
    const snapshot = await db.collection("donations").where("userId", "==", req.user.uid).get();
    const donations = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// User Login (Frontend will generate token)
app.post("/login", async (req, res) => {
  try {
    const { token } = req.body;
    const decodedToken = await auth.verifyIdToken(token);
    res.status(200).json({ message: "Authenticated", user: decodedToken });
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
