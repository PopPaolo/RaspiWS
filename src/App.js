import './App.css';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
    return (
        <div className={'container'}>
            <Navigation/>
            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path="users" element={<School/>}/>
                <Route path="hobbies" element={<Hobbies/>}/>
            </Routes>
            <Credits/>
        </div>
    );
}

const Navigation = () => {
    return (
        <div className={'navigation'}>
            <Link className={'link1'} to={'/home'}>Home</Link>
            <Link className={'link1'} to={'/users'}>School</Link>
            <Link className={'link1'} to={'/hobbies'}>Hobbies</Link>
        </div>
    )
}

const Home = () => {
    return (
        <div>
            <h1 className={'title'}>Home</h1>
        </div>
    )
}

const School = () => {
    return (
        <div>
            <h1 className={'title'}>School</h1>
        </div>
    )
}

const Hobbies = () => {
    return (
        <div>
            <h1 className={'title'}>Hobbies</h1>
        </div>
    )
}

const Credits = () => {
    return (
        <div className={'credits'}>
            Icon by:
            <a className={'link2'} href="https://icons8.com/">icons8</a>
        </div>
    )
}

export default App;
