import React from 'react';
import { Link } from "react-router-dom";
import mock from '../../mock';
import './home.scss';
import Nav from '../Nav/Nav';


function Home () {


    return (
        <>
            <Nav />
            <div className="margin-left">
                <div className="section">
                    <ul className="itemList">
                    {mock.map(foto =>
                            <li className="item" key={foto.id}>
                                <Link to={"/" + foto.id}>
                                    <h2 className="subtitle autor">{foto.author}</h2>
                                    <img src={foto.download_url}></img>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home;