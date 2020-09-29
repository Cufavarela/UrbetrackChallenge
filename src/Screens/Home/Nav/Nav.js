import React from 'react';
import './nav.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../Redux/userActions';
import DarkButton from '../../../Components/DarkButton';


function Nav () {

    const user = useSelector(state => state.User.user);
    const loggedIn = useSelector(state => state.User.loggedIn);

    const dispatch = useDispatch();

    const logOffHandler = () => {
        dispatch(logOut());
    };

    return (
    <aside className="asideMenu">
        <div className="user">{user}</div>
        <div className="logOutContainer">
            <a className="logOut" onClick={logOffHandler}><span>👋</span>Cerrar Sesión</a>
        </div>
        <DarkButton />
    </aside>
    )
}

export default Nav;