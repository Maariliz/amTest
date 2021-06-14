import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Icon } from '@iconify/react';
import bookmarkIcon from '@iconify-icons/bi/bookmark';


const dataAPI = 'http://localhost:5000/students'
const CardsStudents = () => {
    const [data, setData] = useState([]);

    const apiRequest = async () => {
        await axios.get(dataAPI)
            .then(res => {
                const data = res.data
                setData(data)
                console.log(data)
            })
    }

    useEffect(() => {
        apiRequest();
    },[])
   
    return (
        <div className="personajesList">
            <div className='personajesContainer'>

            {data.map (elemento => {
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
export default CardsStudents;