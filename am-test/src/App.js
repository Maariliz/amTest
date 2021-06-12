import React, { Fragment } from 'react';
import './App.css';
import Inicio from './Componentes/PantallaInicial/inicio'
import Estudiantes from './Componentes/Personajes/Estudiantes';
import Staff from './Componentes/Personajes/Staff';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path = '/'>
            <Inicio/>
          </Route>
          <Route path ='/estudiantes'>
            <Estudiantes/>
          </Route>
          <Route path ='/staff'>
            <Staff/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  
  );
}

export default App;
