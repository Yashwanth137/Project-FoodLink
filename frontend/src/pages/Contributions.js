import React from "react";
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from "@mui/material";

const contributions = [
  { donor: "GreenLeaf Hotel", category: "Hotel", amount: "500 Meals", date: "March 1, 2025" },
  { donor: "Food For All NGO", category: "NGO", amount: "2000 kg Rice", date: "February 27, 2025" },
  { donor: "City Bakery", category: "Restaurant", amount: "100 Loaves of Bread", date: "February 25, 2025" },
  { donor: "Orphanage Hope", category: "Orphanage", amount: "300 Meals", date: "February 20, 2025" },
];

const Contributions = () => {
  return (
    <Container sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Contributions
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        These are the recent food contributions made by our generous partners and donors.
      </Typography>

      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: "10px", overflow: "hidden" }}>
        <Table>
          <TableHead sx={{ bgcolor: "green" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Donor</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Category</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Contribution</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contributions.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.donor}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Contributions;
