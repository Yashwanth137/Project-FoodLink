import React, { useState } from "react";
import { loginWithGoogle, logout } from "./auth";

const AuthComponent = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const userData = await loginWithGoogle();
    setUser(userData);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h3>Welcome, {user.displayName}!</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}
    </div>
  );
};

export default AuthComponent;
