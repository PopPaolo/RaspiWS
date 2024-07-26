import { useTheme, useMediaQuery } from '@mui/material';
import Square from './Square';

import BoxMenu from "./BoxMenu.svg";

import Rome_1 from "./media/Rome_1.jpg";
import Rome_2 from "./media/Rome_2.jpg";
import Rome_3 from "./media/Rome_3.jpg";
import Rome_4 from "./media/Rome_4.jpg";

function Home() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  // Calculate the font size for the text (1/4 of the screen height)
  const fontSizeTitle = isMatch ? '8vh' : '15vh';
  const topMargin = isMatch ? '-2vh' : '-5vh';
  const fontSizeAuthor = isMatch ? '3vh' : '7vh';
  const fontSizeCredits = isMatch ? '6vh' : '7vh';


  const positionLeftTitle = isMatch ? '4vh' : '12vh';
  const positionTopTitle = isMatch ? '70vh' : '73vh';

  const flipTitle = isMatch ? '-10deg' : '-7deg';

  // Rome Metro Escalator 

  return (
    <>
      <div className='position-relative'>
        <img 
        src={BoxMenu} 
        alt='Box Menu Icon'
        style={{
          position: 'absolute',
          width: 'auto',
          mixHeight: "100px",
          top: '3vh',
          left: '5vh',
        }}
        ></img>
        <Square
          source={Rome_1}
          altText={'Rome Mini Street'}
          maxHeight={isMatch ? "50vh" : "60vh"}
          top={isMatch ? "15vh" : "17vh"}
          left={isMatch ? "7vh" : "10vh"}
        />
        <Square
          source={Rome_3}
          altText={'Rome Metro Escalator'}
          maxHeight={isMatch ? "50vh" : "60vh"}
          top={isMatch ? '5vh' : '5vh'}
          left={isMatch ? "45vh" : '55vh'}
        />
        <Square
          source={Rome_2}
          altText={'Rome Church Tops'}
          maxHeight={isMatch ? "25vh" : "35vh"}
          top={isMatch ? '60vh' : '60vh'}
          left={isMatch ? "50vh" : '100vh'}
        />
      </div>
      <div
        className='d-flex flex-column position-absolute'
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
            marginTop: topMargin
          }}
        >
          by Paolo Pop
        </h4>
      </div>
    </>
  );
}

export default Home;
