import React from 'react';
import {Link} from 'react-router-dom';
import './imgDetails.scss';

function ImgDetails (props) {

    return (
        <div className="section">
            <div className="details-container">
                <h2 className="subtitle autor">{props.author}</h2>
                <h2 className="subtitle size">Tamaño original: {props.height}px x {props.width}px</h2>
                <img src={props.download_url}></img>
            </div>
            <Link to="/fotos">
                <button type="button">Volver</button>
            </Link>
        </div>
    )
}

export default ImgDetails;