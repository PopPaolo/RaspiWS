/*
    This is the file that defines the highest level of the React app.
    @author Paolo Pop
 */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Container } from "@mui/material";
import NavBar from "./components/NavBar";
import Conjugator from "./components/Conjugator/Conjugator";
import Card from './components/Card'

function App() {
  return (
    <div className="background">
      <NavBar />
      <Container>
        <Routes>
          <Route path={""} element={<Home />} />
          <Route path={"Conjugator"} element={<Card element={<Conjugator />} cardTitle={"Coniuga Verbi:"} />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
