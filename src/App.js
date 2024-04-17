/*
    This is the file that defines the highest level of the React app.
    @author Paolo Pop
 */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

// Other components
import NavBar from "./components/NavBar";

// Page components
import VerbsPage from "./components/VerbsPage";
import Home from "./components/Home";

function App({theme}) {
  return (
    <div className="background">
      <NavBar />
      <Container>
        <Routes>
          <Route path={""} element={<Home />} />
          <Route path={"Conjugator"} element={<VerbsPage/>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
