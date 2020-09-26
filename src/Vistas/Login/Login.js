import React from 'react';
import './login.scss';


function Login () {


    return <div className="section signin">
            <div className="greeting">
                <h1 className="title">Hola!</h1>
                <h2 className="subtitle">Iniciá sesión para continuar</h2>
            </div>
            <form>
                <label className="label" htmlFor="usuario">Usuario:</label>
                <input className="input is-small" type="text" id="usuario" name="usuario"></input>
                <label className="label" htmlFor="password">Contraseña:</label>
                <input className="input is-small" type="password" id="password" name="password"></input>
                <button className="button is-danger" type="submit">Ingresar</button>
            </form>
        </div>
}

export default Login;