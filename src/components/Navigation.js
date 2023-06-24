import {Link, Route, Routes} from 'react-router-dom';
import NavMenu from "./NavMenu";

function Navigation() {
    return <>
        <div className={'navigation'}>
            <Link to={'/'}><img src={'home_icon.svg'} alt={'Home icon'} width={30}/></Link>
            <NavMenu/>
        </div>
    </>
}

export default Navigation;