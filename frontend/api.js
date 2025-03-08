const donateFood = async (donationData) => {
    const token = localStorage.getItem("token"); // Get Firebase Token
  
    if (!token) {
      console.error("User is not authenticated.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // 🔥 Send token for authentication
        },
        body: JSON.stringify(donationData),
      });
  
      const data = await response.json();
      console.log("Donation Response:", data);
    } catch (error) {
      console.error("Error in donation request:", error);
    }
  };
  