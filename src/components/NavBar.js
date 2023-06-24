import {Link} from "react-router-dom";
import Navigation from "./Navigation";

function NavBar(){
    return <div className={'nav-bar'}>
        <Link to={'/'}><img src={'PP_1094x1177.png'} width={50} height={50} alt={"My icon"}/></Link>
        <Navigation/>
    </div>
}

export default NavBar;