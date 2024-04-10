import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import TicTacToe from './components/TicTacToe';
import Test from './components/Test';

function App() {
    return (<div class="container">
        <NavBar />
        <Routes>
            <Route path={""} element={<Home />} />
            <Route path={"projects"} element={<Projects />} />
            <Route path={"projects/TicTacToe"} element={<TicTacToe />} />
            <Route path={"projects/Test"} element={<Test />} />
        </Routes>
    </div>);
}

export default App;
