import React, {useState, useEffect} from 'react';
import './login.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../Redux/userActions';
import DarkButton from '../../Components/DarkButton';
import urbeLogo from '../../Images/urbetrack.png';


function Login () {

    const user = useSelector(state => state.user);
    const loggedIn = useSelector(state => state.loggedIn);

    const dispatch = useDispatch();


    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    const submitHandler = (e) => {
        e.preventDefault();
        if (password === "123456") {
            dispatch(setUser(name));

        } else {
            document.getElementById('password').classList.add('fail');
        }
    };

    return <div className="bg-image">
        <div className="signin">
            <div className="greeting">
                <h1>¡Bienvenid@!</h1>
            </div>
            <form onSubmit={submitHandler}>
                <input className="input" placeholder="Nombre" type="text" id="name" name="name" onChange={(e) => setName(e.target.value)}></input>
                <input className="input" placeholder="Password" type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
                <button className="button" type="submit" >Ingresar</button>
            </form>
        </div>
        <div className="signature">
            <h2>Ejercicio de <a target="blank" href="https://www.linkedin.com/in/facuvarela/">Facundo Varela</a> para</h2>
            <a href="https://urbetrack.com/"><img src={urbeLogo}></img></a>
        </div>
        <DarkButton />
    </div>
}

export default Login;