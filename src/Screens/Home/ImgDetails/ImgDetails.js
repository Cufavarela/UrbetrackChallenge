import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ModalContext } from '../../../Contexts/modalContext';
import './imgDetails.scss';


function ImgDetails (props) {

    const [modalIsOpen, setModalIsOpen] = useContext(ModalContext);


    return (
        <div className="detailsModal">
            <div className="detailsContainer">
                <Link onClick={() => setModalIsOpen(false)} to="/" className="closeModal"> X </Link>
                <img src={props.download_url}></img>
                <div className="imgData">
                    <h2 className="author">{props.author}</h2>
                    <h2 className="size"> • Tamaño original: {props.height}px x {props.width}px • </h2>
                    <a target="blank" href={props.url}><h2>Descargar</h2></a>
                </div>
            </div>
        </div>
    )
}

export default ImgDetails;