import React from 'react';
import './imgDetails.scss';
import Nav from '../Nav/Nav';

function ImgDetails (props) {

    return (
        <>
        <Nav />
        <div className="margin-left">
            <div className="details-container">
                <img src={props.download_url}></img>
                <div className="data-foto">
                    <h2 className="autor">{props.author}</h2>
                    <h2 className="size">Tamaño original: {props.height}px x {props.width}px</h2>
                    <a target="blank" href={props.url}><h2>Descargar</h2></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default ImgDetails;