import React from 'react';
//import CardsStudents from '../Personajes/CardsStudents';
import ButtonsNavigate from '../Personajes/ButtonsNavigate'

import Favoritos from '../Footer/favoritos';
import Agregar from '../Footer/agregar';

// import Background from '../../Assets/Background.png'
// import naming from '../../Assets/naming.png'

const Inicio = () => {
    return (
        <div className='backgroundAsstes'>
            <div>
                <ButtonsNavigate/>
            </div>
            {/* <div className='btnEstudiantes'>
               <CardsStudents />
            </div> */}
            
            
            <footer>
                <div>
                    <Favoritos/>
                </div>
                <div>
                    <Agregar/>
                </div>
            </footer>
            
        </div>
    )

}
export default Inicio