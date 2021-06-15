import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { Icon } from '@iconify/react';
import bookmarkIcon from '@iconify-icons/bi/bookmark';
import db from '../../archivosJSON/db.json'

//const dataAPI = 'http://localhost:5000/characters'

const CardsAlive = () => {
    const [areAlives, setAreAlives] = useState()
    

    const isAlive = () =>{    
    const alive = db.characters.filter(d => d.alive === true)
    setAreAlives(alive)
}
    useEffect(()=>{
        isAlive()
    })

    return(
        <div className="personajesList">
            <div className='personajesContainer'>

            {areAlives && areAlives.map (elemento => {
                return(
                    <div className='cardsContainer' key= { elemento.name}>
                        
                        <div id="picturesContainer" className={elemento.house === 'Ravenclaw' ? 'imgRavenclaw' 
                        : elemento.house === 'Slytherin' ? 'imgSlytherin'
                        : elemento.house === 'Hufflepuff' ? 'imgHufflepuff' : 'imgGryffindor' }> 
                        <div className="pictures"> 
                        <img className="charImg" src={elemento.image} alt='personaje' width='50'/> 
                        </div>
                        </div>
                        
                        
                        <div className="dataContainer">
                        <div className="headCard">
                            <Icon type='button' icon={bookmarkIcon}/>                                             
                            <p> {elemento.alive === true ? 'VIVO' : 'FINADO'} / {elemento.hogwartsStudent === true ? 'ESTUDIANTE' : 'STAFF'}
                            </p>
                        </div>
                        <div className='information'>
                            <h3>{elemento.name}</h3>
                            <p> <b>Cumpleaños:</b> {elemento.dateOfBirth} </p>
                            <p> <b>Género:</b> {elemento.gender} </p>
                            <p> <b>Color de ojos:</b> {elemento.eyeColour} </p>
                            <p> <b>Color de pelo:</b> {elemento.hairColour}</p>
                        </div>
                    </div>    
                    </div> 
                )
            } )} 
            </div>
         </div>
    )
}

export default CardsAlive

