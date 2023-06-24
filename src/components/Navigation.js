import {Link, Route, Routes} from 'react-router-dom';

function Navigation() {
    return <>
        <div className={'navigation'}>
            <Link className={'nav-link'} to={'/'}><img src={'home_icon.svg'} alt={'Home icon'} width={20} /></Link>
            <Link className={"nav-link"} to={'/chat'}>Chat</Link>
        </div>
    </>
}

export default Navigation;