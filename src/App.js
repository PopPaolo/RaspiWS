import './App.css';
import {Route, Routes} from "react-router-dom";
import Chat from "./components/Chat";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
    return (<>
        <NavBar/>
        <Routes>
            <Route path={""} element={<Home />}/>
            <Route path={"chat"} element={<Chat />} />
        </Routes>
    </>);
}

export default App;
