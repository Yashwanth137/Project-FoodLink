import React from "react";
import { Container, Typography, Grid, Card, CardContent, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const HeroSection = styled("div")({
  backgroundImage: "url('/cover.png')",
  backgroundSize: "cover",
  backgroundPosition: "top",
  height: "60vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10vh",
});

const Section = styled("div")({
  padding: "50px 20px",
  textAlign: "center",
});

const Footer = () => (
  <Box sx={{ backgroundColor: "green", color: "white", textAlign: "center", p: 3, mt: 5 }}>
    <Typography variant="body1">&copy; 2025 HungerAid. All Rights Reserved.</Typography>
  </Box>
);

const cards = [
  { title: "NGOs", description: "We work with NGOs to distribute food to those in need." },
  { title: "Hotels", description: "We work with Hotels to distribute food to those in need." },
  { title: "Orphanages", description: "We work with Orphanages to distribute food to those in need." },
  { title: "Old Age Homes", description: "We work with Old Age Homes to distribute food to those in need." },
];

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection>
        <Link href="/about" passHref>
          <Button variant="contained" color="success" sx={{ fontSize: "1.2rem", padding: "8px 20px", marginBottom: "55px" }}>
            About Us
          </Button>
        </Link>
      </HeroSection>

      <Section>
        <Typography variant="h4" fontWeight="bold">Who We Help</Typography>
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
          {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card sx={{ transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{card.title}</Typography>
                  <Typography>{card.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section style={{ backgroundColor: "#f4f4f4" }}>
        <Typography variant="h4" fontWeight="bold">Our Campaigns</Typography>
        <Typography variant="body1" mt={2}>
          Discover our ongoing campaigns and how you can contribute.
        </Typography>
        <Link href="/campaigns" passHref>
          <Button variant="contained" color="success" sx={{ mt: 3 }}>Explore Campaigns</Button>
        </Link>
      </Section>

      <Section>
        <Typography variant="h4" fontWeight="bold">Contributions</Typography>
        <Typography variant="body1" mt={2}>
          See contributions from hotels, NGOs, orphanages, and old age homes.
        </Typography>
        <Link href="/contributions" passHref>
          <Button variant="contained" color="success" sx={{ mt: 3 }}>View Contributions</Button>
        </Link>
      </Section>
      
      <Footer />
    </>
  );
};

export default HomePage;
