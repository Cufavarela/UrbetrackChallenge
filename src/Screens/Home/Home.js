import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import mock from '../../mock';
import './home.scss';
import Nav from './Nav/Nav';
import ImgDetails from './ImgDetails/ImgDetailsContainer';
import { ModalContext } from '../../Contexts/modalContext';


function Home () {

    const [modalIsOpen, setModalIsOpen] = useContext(ModalContext);

    const [target, setTarget] = useState({});

    const pasarId = (id) => {
        setTarget(id);
        setModalIsOpen(true);
    }


    return (
        <>
            {
                modalIsOpen ? <ImgDetails id={target}/> : null
            }
            <Nav />
            <div className="gallery">
                <ul className="itemList">
                {mock.map(foto =>
                        <li className="item" key={foto.id}>
                            <Link to={"/" + foto.id} onClick={() => pasarId(foto.id)}>
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