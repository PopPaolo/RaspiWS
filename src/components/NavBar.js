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
        bgcolor: "#007777",
        justifyContent: "space-between",
        alignItems: "center",
        height: "3rem",
        borderBottom: "black solid 1rem",
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
        <Link to={"Background"}>
          <Avatar alt={"Paolo Pop"} src={"/media/Headshot_1.png"} />
        </Link>
      </Box>
    </Box>
  );
}

export default NavBar;
