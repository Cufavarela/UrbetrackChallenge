import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ModalContext } from '../../../Contexts/modalContext';
import './imgDetails.scss';


function ImgDetails (photo) {

    const onePhoto = photo.photo;

    const [modalIsOpen, setModalIsOpen] = useContext(ModalContext);

    return (
        <Link to="/"><div onClick={() => setModalIsOpen(false)} className="detailsModal">
            <div className="detailsContainer">
                <Link onClick={() => setModalIsOpen(false)} to="/" className="closeModal"> X </Link>
                <img src={onePhoto.download_url}></img>
                <div className="imgData">
                    <h2 className="author">{onePhoto.author}</h2>
                    <h2 className="size"> • Tamaño original: {onePhoto.height}px x {onePhoto.width}px • </h2>
                    <a className="button download" target="blank" href={onePhoto.url}><h2>Descargar</h2></a>
                </div>
            </div>
        </div></Link>
    )
}

export default ImgDetails;