import React, {useState, useEffect} from 'react';
import './login.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../Redux/userActions';


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
            document.getElementById('fail').classList.add('visible')
        }
    };

    return <div className="bg-image">
        <div className="signin">
            <div className="greeting">
                <h1>Hola!</h1>
                <h2>Iniciá sesión para continuar</h2>
                <h2 id="fail" className="fail">Contraseña inválida</h2>
            </div>
            <form onSubmit={submitHandler}>
                <label className="label" htmlFor="name">Usuario:</label>
                <input className="input" type="text" id="name" name="name" onChange={(e) => setName(e.target.value)}></input>
                <label className="label" htmlFor="password">Contraseña:</label>
                <input className="input" type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
                <button className="button" type="submit" >Ingresar</button>
            </form>
        </div>
    </div>
}

export default Login;