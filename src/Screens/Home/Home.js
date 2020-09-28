import React from 'react';
import { Link } from "react-router-dom";
import mock from '../../mock';
import './home.scss';
import Nav from './Nav/Nav';


function Home () {


    return (
        <>
            <Nav />
            <div className="gallery">
                <ul className="itemList">
                {mock.map(foto =>
                        <li className="item" key={foto.id}>
                            <Link to={"/" + foto.id}>
                                <img src={foto.download_url}></img>
                                <div className="authorContainer">
                                    <h2 className="author">{foto.author}</h2>
                                </div>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default Home;