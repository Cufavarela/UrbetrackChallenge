import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import mock from '../../../mock';
import ImgDetails from './ImgDetails';
import './imgDetails.scss';

function ImgDetailsContainer () {

    const {id} = useParams();
    const [foto, setFoto] = useState({});

    useEffect(() => {
        for (let i=0; i < mock.length; i++) {
            if (mock[i].id === id) {
                setFoto(mock[i]);
            }
        }
    },[]);

    return (
        <ImgDetails {...foto} />
    )
}

export default ImgDetailsContainer;