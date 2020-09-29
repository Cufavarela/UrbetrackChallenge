import React, {useState, useEffect} from 'react';
import './login.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../Redux/userActions';
import DarkButton from '../../Components/DarkButton';


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
                <h1>Hola!</h1>
                <h2>Iniciá sesión para continuar</h2>
            </div>
            <form onSubmit={submitHandler}>
                <input className="input" placeholder="Nombre" type="text" id="name" name="name" onChange={(e) => setName(e.target.value)}></input>
                <input className="input" placeholder="Password" type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
                <button className="button" type="submit" >Ingresar</button>
            </form>
        </div>
        <DarkButton />
    </div>
}

export default Login;