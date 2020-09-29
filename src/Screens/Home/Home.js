import React, { useContext, useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import './home.scss';
import Nav from './Nav/Nav';
import ImgDetails from './ImgDetails/ImgDetailsContainer';
import { ModalContext } from '../../Contexts/modalContext';
import { getPhotos } from '../../Redux/photosActions';


function Home () {

    const [modalIsOpen, setModalIsOpen] = useContext(ModalContext);

    const [target, setTarget] = useState({});

    const pasarId = (id) => {
        setTarget(id);
        setModalIsOpen(true);
    }

    const photosState = useSelector(state => state.Photos);
    const { photos, loading } = photosState;
    const dispatch = useDispatch();

    const morePhotos = () => {
        dispatch(getPhotos(8));
    }

    useEffect(() => {
        dispatch(getPhotos());
    }, [])

    return (
        <>
            <Nav />
            { loading ? <div>Loading...</div> :
            <div className="gallery">
                <ul className="itemList">
                {photos.map(foto =>
                        <li className="item" key={foto.id}>
                            <Link to={"/" + foto.id} onClick={() => pasarId(foto.id)}>
                                <img src={foto.download_url}></img>
                                <div className="authorContainer">
                                    <h2 className="author">{foto.author}</h2>
                                </div>
                            </Link>
                        </li>
                    )}
                    <li className="item more" onClick={morePhotos}>
                        ➕
                    </li>
                </ul>
            </div>
            }
                {
                modalIsOpen ?
                <div className="modalContainer">
                    <ImgDetails id={target}/>
                </div>
                : null
                }
        </>
    )
}

export default Home;