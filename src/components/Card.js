import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  styled,
} from "@mui/material";
import AutorenewIcon from '@mui/icons-material/Autorenew';


const CardTitle = styled(Typography)(({ theme }) => ({
  color: '#f56800',
  fontSize: "2em", // change this
  fontWeight: "bold",
  textAlign: "center",
  margin: theme.spacing(1),
  textShadow: "1px 1px 2px gold",
}));

const FlippableCard = ({ element, cardTitle }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card
      sx={{
        backgroundColor: "rgba(0,0,0,0.7)",
        userSelect: "none",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardContent>
        <CardTitle variant="h1">{cardTitle}</CardTitle>
        {element}
      </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button
                onClick={handleFlip}
                sx={{
                    backgroundColor: "#f56800",
                    color: "#fff",
                    minWidth: '20px',
                    height: '40px',
                    "&:hover": {
                        backgroundColor: "#b64500",
                    },
                }}
            >
                <AutorenewIcon/>
            </Button>
        </CardActions>
    </Card>
  );
};

export default FlippableCard;
