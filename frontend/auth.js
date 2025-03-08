import { auth, provider, signInWithPopup, signOut } from "./firebaseConfig";

// Function to sign in with Google
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const token = await result.user.getIdToken(); // Get Firebase ID Token
    localStorage.setItem("token", token); // Store token for API calls
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

// Function to log out
export const logout = async () => {
  await signOut(auth);
  localStorage.removeItem("token");
};
