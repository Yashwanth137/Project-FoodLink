import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from "@mui/material";
import { styled } from "@mui/system";

const HeroSection = styled("div")({
  backgroundImage: "url('/campaign-cover.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  textAlign: "center",
  padding: "20px",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Fallback if image fails
});

const campaigns = [
  {
    title: "Meal for Every Child",
    image: "/campaign1.jpg",
    description: "Providing nutritious meals to underprivileged children across schools.",
  },
  {
    title: "Food Rescue Drive",
    image: "/campaign2.jpg",
    description: "Partnering with restaurants and supermarkets to reduce food waste and feed the hungry.",
  },
  {
    title: "Disaster Relief Support",
    image: "/campaign3.jpg",
    description: "Delivering emergency food supplies to flood and earthquake victims.",
  },
  {
    title: "Homeless Shelter Food Program",
    image: "/campaign4.jpg",
    description: "Regular meal distribution at homeless shelters in urban areas.",
  },
];

const Campaigns = () => {
  console.log("Campaigns data:", campaigns); // Debugging Log

  return (
    <>
      <HeroSection>
        <Typography variant="h3" fontWeight="bold">Our Campaigns</Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Join our mission to end hunger by supporting or participating in these campaigns.
        </Typography>
      </HeroSection>

      <Container sx={{ py: 5, minHeight: "50vh" }}> {/* Ensure visibility */}
        {campaigns.length === 0 ? (
          <Typography variant="h5" sx={{ textAlign: "center", mt: 5 }}>No campaigns available at the moment.</Typography>
        ) : (
          <Grid container spacing={3} justifyContent="center">
            {campaigns.map((campaign, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card sx={{ boxShadow: 3, transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}>
                  {campaign.image ? (
                    <CardMedia component="img" height="180" image={campaign.image} alt={campaign.title} />
                  ) : (
                    <Box sx={{ height: 180, backgroundColor: "#ccc", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Typography>No Image</Typography>
                    </Box>
                  )}
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">{campaign.title}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>{campaign.description}</Typography>
                    <Button variant="contained" color="success" sx={{ mt: 2 }}>Get Involved</Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Campaigns;
