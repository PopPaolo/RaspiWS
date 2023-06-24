import {Link} from "react-router-dom";

function NavMenu(){
    return <ul className={'menu'}>
        <li className={'menu-element'}>
            <Link to={'/chat'}><img src={'media/chat_icon.svg'} alt={'chat icon'} width={35}/></Link>
        </li>
    </ul>
}

export default NavMenu;