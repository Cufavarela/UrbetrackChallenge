import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import Login from './Screens/Login/Login';
import Home from './Screens/Home/Home';
import {useSelector, useDispatch} from 'react-redux';
import {ModalContext} from './Contexts/modalContext';


function App() {

  const loggedIn = useSelector(state => state.User.loggedIn);
  const isDark = useSelector(state => state.Theme.darkTheme);
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={[modalIsOpen, setModalIsOpen]}>
    <main className={`${ isDark ? 'darkMode' : ''}`}>
      <BrowserRouter>
        <Switch>
          <Route path="/">
          {
            loggedIn ?
            <Home />
            :
            <Login />
          }
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
    </ModalContext.Provider>
  );
}

export default App;
