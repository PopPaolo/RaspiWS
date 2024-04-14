/*
    This is the file that defines the navigation bar component.
    @author Paolo Pop

    The navigation bar is sticky at the top of the
    page and slides up off the screen when scrolling
    down past a threshold, and slides back down when scrolling up.
 */

import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import {Avatar, Box, Paper} from "@mui/material";
import "./Conjugator/Conjugator";
import { useEffect, useState } from "react";

function NavBar() {
    // State variable to control the visibility of the navigation bar
    const [showNav, setShowNav] = useState(true);
    // State variable to store the last scroll position
    const [scrollPos, setScrollPos] = useState(0);
    // Threshold for scroll position to control the visibility of the navigation bar
    const threshold = 200;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const visible =
      scrollPos > currentScrollPos || currentScrollPos < threshold;

    setScrollPos(currentScrollPos);
    setShowNav(visible);
  };

  return (
    <Paper
      sx={{
        display: "flex",
        padding: "1em",
        background: "linear-gradient(to right, orange, gold, #f56800)",
        justifyContent: "space-between",
        alignItem: "center",
        height: "5rem",
        position: "sticky",
        top: 0,
        zIndex: 100, // to ensure the navbar is above other elements
        transform: showNav ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <Link to={"/"}>
        <img
          src={"media/logo%202.svg"}
          width={50}
          height={50}
          alt={"My icon"}
        />
      </Link>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "1rem",
          gap: "15%",
        }}
      >
        <Link to={"Conjugator"}>
          <LanguageIcon color={"secondary"} sx={{ fontSize: 50 }} />
        </Link>
        <Link to={"/"}>
          <Avatar alt={"Paolo Pop"} src={"/media/Headshot_1.png"} />
        </Link>
      </Box>
    </Paper>
  );
}

export default NavBar;
