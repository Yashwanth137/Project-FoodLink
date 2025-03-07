# 🍽️ HungerAid - Connecting Surplus Food to Those in Need

## 🌍 About HungerAid
Every day, tons of food go to waste while millions of people struggle with hunger. **HungerAid** aims to bridge this gap by connecting restaurants, grocery stores, and individuals with surplus food to people and organizations in need. 

This project is built to support **UN Sustainable Development Goal 2: Zero Hunger**, making it easier to donate, find, and distribute food efficiently.

## 🎯 What Makes HungerAid Special?
✅ **Find & Share Surplus Food Easily** – A real-time map helps users locate available food near them.  
✅ **AI-based Expiration Tracker** – Helps users keep track of food shelf life.  
✅ **Different User Roles** – Whether you're a donor, a receiver, or an admin, there's a role for you.  
✅ **Community-driven Impact** – Earn rewards for donating food and helping reduce waste.  
✅ **NGO & Food Bank Partnerships** – Automates notifications for easy food distribution.  
✅ **Secure & Seamless Login** – Firebase Authentication ensures safety for all users.

## 🏗️ Tech Stack
- **Frontend:** React.js (for web) / Flutter (for mobile)
- **Backend:** Node.js + Express
- **Database:** Firebase Firestore
- **Authentication:** Firebase Auth
- **APIs:** Google Maps API, OpenAI (for smart food recommendations)

## 🚀 Getting Started
### Prerequisites
Before you begin, make sure you have:
- Node.js and npm installed
- A Firebase project set up
- A Google Maps API key

### Setting Up the Backend
1. Clone the project:
   ```sh
   git clone https://github.com/yourusername/HungerAid.git
   cd HungerAid
   ```
2. Install dependencies:
   ```sh
   cd backend
   npm install
   ```
3. Add your Firebase credentials (`serviceAccountKey.json`) inside the backend folder.
4. Start the server:
   ```sh
   node server.js
   ```

### Setting Up the Frontend
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Add Firebase configuration in `firebase.js`.
4. Start the frontend application:
   ```sh
   npm start
   ```

## 📜 API Endpoints
| Method | Endpoint        | Description                     |
|--------|----------------|---------------------------------|
| POST   | `/donate`      | Add a new food donation        |
| GET    | `/donations`   | Fetch all available donations  |

## 🌟 What's Next?
- AI-powered food expiration predictions.
- A dedicated mobile app.
- Push notifications for new donations.
- Blockchain-based tracking for transparency.

## 🤝 Get Involved
HungerAid is open for contributions! If you have ideas, spot issues, or want to help improve the platform, feel free to submit a pull request or open an issue.

## 📜 License
This project is licensed under the MIT License.

## 🙌 Special Thanks
- Inspired by **UN SDG Goal 2: Zero Hunger**.
- Built with love and open-source technology.

🚀 Join us in making a real difference—let’s reduce food waste and fight hunger together! 🌱
