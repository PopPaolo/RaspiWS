/*
    Home.js defines the design 
    and functionality for the home page.
    @author Paolo Pop
*/

// ######################## FUNCTIONALITY ########################
// #
import { useTheme, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
// #
// ###############################################################

// ####################### APP COMPONENTS ########################
// #
import Square from "./Square";
// # Icon
import P_Icon from "../P_Icon.svg";
// # Media
import Rome_1 from "../media/Rome_1.jpg";
import Rome_2 from "../media/Rome_2.jpg";
import Rome_3 from "../media/Rome_3.jpg";
import Rome_4 from "../media/Rome_4.jpg";
import Florence_1 from "../media/Florence_1.jpg";
import Positano_1 from "../media/Positano_1.jpg";
// #
// ###############################################################

function Home({ size }) {
  const isSmall = size === "small";
  const isMid = size === "medium";

  return (
    <div className="position-relative">
      <Square
        source={Florence_1}
        altText={"Florence Tower Close Up"}
        maxHeight={isSmall ? "50vh" : isMid ? "60vh" : "60vh"}
        top={isSmall ? "15vw" : isMid ? "7vh" : "0vh"}
        left={isSmall ? "20vh" : isMid ? "25vh" : "10vh"}
        isSmall={isSmall}
      />
      <Square
        source={Positano_1}
        altText={"Florence Tower Far"}
        maxHeight={isSmall ? "50vh" : isMid ? "70vh" : "70vh"}
        top={isSmall ? "15vw" : isMid ? "20vh" : "20vh"}
        left={isSmall ? "7vh" : isMid ? "13vh" : "20vh"}
        isSmall={isSmall}
      />
      <Square
        source={Rome_1}
        altText={"Rome Mini Street"}
        maxHeight={isSmall ? "50vh" : isMid ? "75vh" : "75vh"}
        top={isSmall ? "15vw" : isMid ? "10vh" : "10vh"}
        left={isSmall ? "7vh" : isMid ? "19vh" : "30vh"}
        isSmall={isSmall}
      />
        <Square
          source={Rome_2}
          altText={'Rome Church Tops'}
          maxHeight={isSmall ? "50vh" : isMid ? "75vh" : "65vh"}
          top={isSmall ? "50vh" : isMid ? "75vh" : "20vh"}
          left={isSmall ? "50vh" : isMid ? "75vh" : "40vh"}
        />

      <div
        className="d-flex flex-column position-absolute"
        style={{
          rotate: isSmall ? "-10deg" : isMid ? "-5deg" : "-5deg",
          left: isSmall ? "10vh" : isMid ? "17vh" : "17vh",
          top: isSmall ? "70vh" : isMid ? "70vh" : "70vh",
          fontFamily: "island",
          userSelect: "none",
        }}
      >
        <h1
          className="my-0"
          style={{
            fontSize: isSmall ? "15vw" : isMid ? "14vh" : "14vh",
          }}
        >
          Things and Places
        </h1>
        <h4
          className="d-flex justify-content-end mb-0 me-md-4 me-1"
          style={{
            fontSize: isSmall ? "10vw" : isMid ? "10vh" : "10vh",
            marginTop: isSmall ? "-2vw" : isMid ? "-5vh" : "-5vh",
          }}
        >
          by Paolo Pop
        </h4>
      </div>
    </div>
  );
}

export default Home;
