import React, { Fragment } from 'react';
import './App.css';
import Inicio from './Componentes/PantallaInicial/Home'
//import CardsStudents from './Componentes/Personajes/CardsStudents';
// import Staff from './Componentes/Personajes/Staff';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './Componentes/redux/store';

function App() {
  return (
  <Provider store={store}> 
    <Fragment>
      <Router>
        <Switch>
          <Route path = '/'>
            <Inicio/>
          </Route>          
        </Switch>
      </Router>
    </Fragment>
    </Provider> 
  );
}

export default App;
