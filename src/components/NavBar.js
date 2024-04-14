/*
    This is the file that defines the navigation bar component.
    @author Paolo Pop
 */

import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import { Avatar, Box } from "@mui/material";
import "./Conjugator/Conjugator";

function NavBar() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "1em",
        background: "linear-gradient(to bottom, #007777, transparent)",
        justifyContent: "space-between",
        alignItem: "center",
        height: "5rem"
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
    </Box>
  );
}

export default NavBar;
