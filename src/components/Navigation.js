import {Link, Route, Routes} from 'react-router-dom';
import mainLogo from "../media/PP_1094x1177.png";

function Navigation() {
    return <>
        <div className={'navigation'}>
            <Link className={'nav-link'} to={'/'}><img src={'home_icon.svg'} alt={'Home icon'} width={20} /></Link>
            <Link className={"nav-link"} to={'/chat'}>Chat</Link>
        </div>
    </>
}

export default Navigation;