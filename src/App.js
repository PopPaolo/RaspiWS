/*
    This is the file that defines the highest level of the React app.
    @author Paolo Pop
 */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Container } from "@mui/material";
import AcademicBackground from "./components/AcademicBackground";
import Background from "./components/Background";
import NavBar from "./components/NavBar";
import Conjugator from "./components/Conjugator/Conjugator"; 

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path={""} element={<Home />} />
          <Route path={"AcademicBackground"} element={<AcademicBackground />} />
          <Route path={"Conjugator"} element={<Conjugator/>} />
          <Route path={"Background"} element={<Background />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
