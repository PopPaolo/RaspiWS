/*
    This is the file that defines the navigation bar component.
    @author Paolo Pop
 */

import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import { Avatar, Box } from "@mui/material";

function NavBar() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "1em",
        bgcolor: "#105348",
        justifyContent: "space-between",
        height: "3rem",
        borderBottom: "black solid 2rem",
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
        }}
      >
        <Link to={"AcademicBackground"}>
          <SchoolIcon color={"secondary"} sx={{ fontSize: 50, m: "20pt" }} />
        </Link>
        <Avatar alt={"Paolo Pop"} src={"/media/Headshot_1.png"} />
      </Box>
    </Box>
  );
}

export default NavBar;
