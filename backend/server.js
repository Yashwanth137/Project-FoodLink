const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./firebaseConfig");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// POST: Add a Food Donation
app.post("/donate", async (req, res) => {
  try {
    const { donor, foodType, quantity, expiration, location } = req.body;
    await db.collection("donations").add({
      donor,
      foodType,
      quantity,
      expiration,
      location,
      timestamp: new Date(),
    });
    res.status(201).json({ message: "Donation added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Fetch Available Donations
app.get("/donations", async (req, res) => {
  try {
    const snapshot = await db.collection("donations").get();
    const donations = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
