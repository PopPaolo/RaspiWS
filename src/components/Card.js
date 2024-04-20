import React from "react";
import {
  Card,
  CardContent,
  Typography,
  styled,
} from "@mui/material";


const CardTitle = styled(Typography)(({ theme }) => ({
  color: "#f56800",
  fontSize: "2em", // change this
  fontWeight: "bold",
  textAlign: "center",
  margin: theme.spacing(1),
  textShadow: "1px 1px 2px #ffd700",
}));

const FlippableCard = ({ element, cardTitle, theme }) => {

  return (

    <Card
      sx={{
        backgroundColor: "rgba(0,0,0,0.7)",
        userSelect: "none",
      }}>
      <CardContent>
        <CardTitle variant="h1" theme={theme}>{cardTitle}</CardTitle>
        {element}
      </CardContent>
    </Card>
  );
};

export default FlippableCard;
