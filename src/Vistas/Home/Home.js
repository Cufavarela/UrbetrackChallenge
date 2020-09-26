import React from 'react';
import { Link } from "react-router-dom";
import mock from '../../mock';
import './home.scss';

function Home () {


    return (
        <div className="section">
            <ul className="itemList">
            {mock.map(foto =>
                    <li className="item" key={foto.id}>
                        <Link to={"/fotos/" + foto.id}>
                            <h2 className="subtitle autor">{foto.author}</h2>
                            <img src={foto.download_url}></img>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Home;