import './App.css';
import Navigation from "./components/Navigation";
import {Link, Route, Routes} from "react-router-dom";
import Chat from "./components/Chat";
import Home from "./components/Home";

function App() {
    return (<>
        <div className={'nav-bar'}>
            <Link className={'nav-link'} to={'/'}><img src={'PP_1094x1177.png'} width={50} height={50} alt={"My icon"} className={"my-icon"}/></Link>
            <Navigation/>
        </div>
        <Routes>
            <Route path={""} element={<Home />}/>
            <Route path={"chat"} element={<Chat />} />
        </Routes>
    </>);
}

export default App;
