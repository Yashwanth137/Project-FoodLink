import React, { useState } from "react";
import axios from "axios";

const Donate = () => {
  const [donor, setDonor] = useState("");
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiration, setExpiration] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/donate", {
        donor,
        foodType,
        quantity,
        expiration,
        location,
      });
      alert("Donation added!");
    } catch (error) {
      console.error("Error adding donation:", error);
    }
  };

  return (
    <div>
      <h2>Donate Food</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Donor Name" onChange={(e) => setDonor(e.target.value)} />
        <input type="text" placeholder="Food Type" onChange={(e) => setFoodType(e.target.value)} />
        <input type="number" placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)} />
        <input type="date" onChange={(e) => setExpiration(e.target.value)} />
        <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default Donate;
