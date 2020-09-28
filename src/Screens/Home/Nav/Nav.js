import React from 'react';
import './nav.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../Redux/userActions';
import { Link } from 'react-router-dom';


function Nav () {

    const user = useSelector(state => state.User.user);
    const loggedIn = useSelector(state => state.User.loggedIn);

    const dispatch = useDispatch();

    const logOffHandler = () => {
        dispatch(logOut());
    };

    return (
    <aside className="asideMenu">
        <div className="user">
            {user}
        </div>
        {/* <Link to="/">
            <button className="button">Home</button>
        </Link> */}
        <div className="logOutContainer">
            <a className="logOut" onClick={logOffHandler}><span>👋</span>Cerrar Sesión</a>
        </div>
    </aside>
    )
}

export default Nav;