import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)(({ scroll }) => ({
    backgroundColor: scroll ? "rgba(0, 128, 0, 0.8)" : "transparent",
    boxShadow: "none",
    transition: "background-color 0.3s ease",
    position: "fixed",
}));

const StyledTypography = styled(Typography)(({ scroll }) => ({
    flexGrow: 1,
    color: scroll ? "white" : "black",
    fontWeight: "bold",
    transition: "color 0.3s ease",
}));

const StyledButton = styled(Button)(({ scroll }) => ({
    color: scroll ? "white" : "black",
    fontWeight: "bold",
    transition: "color 0.3s ease",
}));

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <StyledAppBar scroll={scroll}>
            <Toolbar>
                <StyledTypography variant="h6" scroll={scroll}>
                    HungerAid
                </StyledTypography>
                <Box>
                    <Link href="/" passHref>
                        <StyledButton scroll={scroll}>Home</StyledButton>
                    </Link>
                    <Link href="/about" passHref>
                        <StyledButton component={Link} to="/About" scroll={scroll}>
                            About
                        </StyledButton>
                    </Link>
                    <Link href="/campaigns" passHref>
                        <StyledButton component={Link} to="/Campaigns" scroll={scroll}>Campaigns</StyledButton>
                    </Link>
                    <Link href="/contributions" passHref>
                        <StyledButton component={Link} to="/Contributions" scroll={scroll}>Contributions</StyledButton>
                    </Link>
                    <Link href="/login" passHref>
                        <StyledButton component={Link} to="/login" scroll={scroll}>
                            Login
                        </StyledButton>
                    </Link>
                </Box>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Navbar;
