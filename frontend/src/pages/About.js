import React from "react";
import { Container, Typography, Box, Grid, Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { teal } from "@mui/material/colors"; // ✅ Import Material-UI teal colors

const About = () => {
  const backgroundColor = "#E8F5E9";  // Light Green (Material-UI Green[50])
const sectionColor = "#C8E6C9";     // Slightly darker Green for contrast
// Slightly darker for contrast

  const pastCampaigns = [
    { title: "Feed the Homeless", description: "Provided over 10,000 meals to homeless communities in major cities." },
    { title: "Zero Hunger Drive", description: "Partnered with local restaurants to donate surplus food to orphanages." },
    { title: "School Nutrition Program", description: "Ensured daily meals for underprivileged school children." },
    { title: "Disaster Relief Food Aid", description: "Supplied food to flood and earthquake victims in affected regions." },
  ];

  const ngos = [
    { name: "Food For All", mission: "Dedicated to eliminating hunger by redistributing excess food from businesses." },
    { name: "Save A Meal", mission: "Works with restaurants and hotels to collect unsold food for shelters." },
    { name: "Hope Kitchens", mission: "Provides free meals to homeless individuals through community kitchens." },
    { name: "Children’s Hunger Fund", mission: "Focuses on feeding underprivileged children through school meal programs." },
  ];

  return (
    <Container
  maxWidth="lg"
  sx={{
    mt: 12,
    textAlign: "center",
    backgroundColor,  // ✅ Light Green Background
    borderRadius: 4,
    py: 6,
    px: 3,
    boxShadow: 3,
  }}
>

      {/* About Us Section */}
      <Box sx={{ p: 4, backgroundColor: sectionColor, borderRadius: 4, boxShadow: 3 }}>
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          About HungerAid
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: "auto", lineHeight: 1.8 }}>
          HungerAid is a non-profit initiative dedicated to eradicating hunger by partnering with restaurants, hotels, and NGOs.
          We bridge the gap between surplus food and those in need, ensuring that no food goes to waste while fighting food insecurity globally.
        </Typography>
      </Box>

      {/* Past Campaigns Section */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Past Campaigns
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {pastCampaigns.map((campaign, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card sx={{ boxShadow: 4, transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" color="secondary">
                    {campaign.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {campaign.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* NGO Partnerships Section */}
      <Box sx={{ my: 6, p: 4, backgroundColor: sectionColor, borderRadius: 4, boxShadow: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our NGO Partnerships
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          HungerAid collaborates with numerous NGOs specializing in food distribution and hunger relief efforts.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {ngos.map((ngo, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card sx={{ boxShadow: 4, transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" color="secondary">
                    {ngo.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {ngo.mission}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Get Involved
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Join us in the fight against hunger! Whether you’re an individual, restaurant, or NGO, you can contribute and make a difference.
        </Typography>
        <Button variant="contained" color="success" size="large" component={Link} to="/campaigns" sx={{ fontWeight: "bold" }}>
          View Ongoing Campaigns
        </Button>
      </Box>
    </Container>
  );
};

export default About;
