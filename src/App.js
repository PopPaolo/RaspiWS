/*
    This is the file that defines the highest level of the React app.
    @author Paolo Pop
 */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path={""} element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
