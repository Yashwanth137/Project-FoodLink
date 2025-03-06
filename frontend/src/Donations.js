import React, { useEffect, useState } from "react";
import axios from "axios";

const Donations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/donations");
      setDonations(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Available Donations</h2>
      <ul>
        {donations.map((donation) => (
          <li key={donation.id}>
            {donation.foodType} - {donation.quantity} (Expires: {donation.expiration})  
            <br />
            Donor: {donation.donor} | Location: {donation.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Donations;
