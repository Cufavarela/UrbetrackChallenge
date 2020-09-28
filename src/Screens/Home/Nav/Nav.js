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
    <aside className="has-background-primary aside">
        <div className="usuario">
            {user}
        </div>
        <Link to="/">
            <button className="button is-rounded">Home</button>
        </Link>
        <div className="logOut">
            <button className="button is-rounded" onClick={logOffHandler}>Salir</button>
        </div>
    </aside>
    )
}

export default Nav;