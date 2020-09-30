import React from 'react';
import './darkButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import { goDark, goLight } from '../Redux/themeActions';


function DarkButton () {

    const isDark = useSelector(state => state.Theme.darkTheme);
    const dispatch = useDispatch();


    const themeHandler = () => {
        if (isDark) {
          dispatch(goLight());
        } else {
          dispatch(goDark());
        }
      }


    return <div className="goDarkContainer">
        <a className="button" onClick={themeHandler}>Go {isDark ? 'Light' : 'Dark'}</a>
    </div>
}

export default DarkButton;