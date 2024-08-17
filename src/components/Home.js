/*
    Home.js defines the design 
    and functionality for the home page.
    @author Paolo Pop
*/


// ######################## FUNCTIONALITY ########################
// #
import { useTheme, useMediaQuery } from '@mui/material';
import React, { useRef, useEffect } from 'react';
// #
// ###############################################################


// ####################### APP COMPONENTS ########################
// # 
import Square from './Square';
// # Icon
import P_Icon from "./P_Icon.svg";
// # Media
import Rome_1 from "./media/Rome_1.jpg";
import Rome_2 from "./media/Rome_2.jpg";
import Rome_3 from "./media/Rome_3.jpg";
import Rome_4 from "./media/Rome_4.jpg";
import Florence_1 from "./media/Florence_1.jpg";
import Positano_1 from "./media/Positano_1.jpg";
// #
// ###############################################################


function Home({size}) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const scrollContainerRef = useRef(null);

  const fontSizeTitle = isMatch ? '15vw' : '14vh';
  const topMarginAuthor = isMatch ? '-2vh' : '-5vh';
  const fontSizeAuthor = isMatch ? '10vw' : '10vh';
  const positionLeftTitle = isMatch ? '10vh' : '17vh';
  const positionTopTitle = isMatch ? '70vh' : '70vh';

  const flipTitle = isMatch ? '-10deg' : '-5deg';


  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY !== 0) {
        scrollContainerRef.current.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener('wheel', handleScroll);

    return () => {
      scrollContainer.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div
      className='d-flex overflow-hidden'
      ref={scrollContainerRef}
      style={{
        height: '100vh',
        whiteSpace: 'nowrap',
        maxHeight: '-webkit-fill-available'
      }}>
      <div
        className='position-relative'>
        {/* <img
          src={P_Icon}
          alt='Box Menu Icon'
          style={{
            position: 'absolute',
            width: 'auto',
            minHeight: "5vh",
            top: '5vh',
            left: '5vh',
            transition: "transform 0.4s ease-in-out"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "rotate(450deg)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "rotate(0deg)";
          }}
        ></img> */}
        <Square
          source={Florence_1}
          altText={'Florence Tower Close Up'}
          maxHeight={isMatch ? "50vh" : "60vh"}
          top={isMatch ? "15vh" : "7vh"}
          left={isMatch ? "20vh" : "25vh"}
        />
        <Square
          source={Positano_1}
          altText={'Florence Tower Far'}
          maxHeight={isMatch ? "50vh" : "70vh"}
          top={isMatch ? "15vh" : "20vh"}
          left={isMatch ? "7vh" : "130vh"}
        />
        <Square
          source={Rome_1}
          altText={'Rome Mini Street'}
          maxHeight={isMatch ? "50vh" : "75vh"}
          top={isMatch ? "15vh" : "10vh"}
          left={isMatch ? "7vh" : "195vh"}
        />
        {/* <Square
          source={Rome_3}
          altText={'Rome Metro Escalator'}
          maxHeight={isMatch ? "50vh" : "60vh"}
          top={isMatch ? '5vh' : '5vh'}
          left={isMatch ? "45vh" : '55vh'}
        />
        <Square
          source={Rome_2}
          altText={'Rome Church Tops'}
          maxHeight={isMatch ? "25vh" : "45vh"}
          top={isMatch ? '60vh' : '40vh'}
          left={isMatch ? "50vh" : '100vh'}
        /> */}
      </div>
      <div
        className='d-flex flex-column position-relative'
        style={{
          rotate: flipTitle,
          left: positionLeftTitle,
          top: positionTopTitle,
          fontFamily: 'island',
          userSelect: 'none'
        }}
      >
        <h1
          className='my-0'
          style={{
            fontSize: fontSizeTitle
          }}
        >
          Things and Places
        </h1>
        <h4
          className='d-flex justify-content-end mb-0 me-md-4 me-1'
          style={{
            fontSize: fontSizeAuthor,
            marginTop: topMarginAuthor
          }}
        >
          by Paolo Pop
        </h4>
      </div>
    </div>
  );
}

export default Home;