import React, { useContext, useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import './home.scss';
import Nav from './Nav/Nav';
import ImgDetails from './ImgDetails/ImgDetails';
import { ModalContext } from '../../Contexts/modalContext';
import { getPhotos } from '../../Redux/photosActions';


function Home () {

    const [modalIsOpen, setModalIsOpen] = useContext(ModalContext);

    const [target, setTarget] = useState({id: '', url: '', author: '', src: '', width: 0, height: 0});

    const getOnePhoto = (obj) => {
        setTarget(obj);
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
                            <Link to={"/" + foto.id} onClick={() => getOnePhoto(foto)}>
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
                <ImgDetails photo={target}/>
            </div>
            : null
            }
        </>
    )
}

export default Home;