import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography, styled } from '@mui/material';

const CardTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  margin: theme.spacing(2),
  textShadow: '1px 1px 3px #aaa',
}));

const FlippableCard = ({ element, cardTitle }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card
      className={'card'}
      sx={{
        backgroundColor: 'rgba(0,0,0,0.75)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'fit-content',
        height: 'fitcontent',
        userSelect: 'none',
        px: '10pt',
        py: '5pt'
      }}>
      <CardContent>
        <CardTitle variant="h1">
          {cardTitle}
        </CardTitle>
        {element}
      </CardContent>
      <CardActions>
        <Button
          onClick={handleFlip}
          sx={{
            backgroundColor: 'rgba(255,255,255,0.5)', // white color with a bit of transparency
            color: 'rgba(0,0,0,0.87)', // almost black color for the text
            '&:hover': {
              backgroundColor: 'rgba(255,255,255)', // solid white color on hover
            },
          }}>Flip</Button>
      </CardActions>
    </Card>
  );
};

export default FlippableCard;
