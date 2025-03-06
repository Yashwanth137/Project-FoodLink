const admin = require("firebase-admin");
const serviceAccount = require("./theserviceAccountKey.json"); // Your Firebase key, your json file place here

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports = db;
