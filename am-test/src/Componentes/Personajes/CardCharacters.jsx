import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';
import bookmarkIcon from '@iconify-icons/bi/bookmark';

const dataAPI = 'http://localhost:5000/characters'

const CardCharacter = () => {
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

    return(
        <div className="charactersList">
            

            {data.map (elemento => {
                return(
                    <div key= { elemento.name}>
                        <Icon type='button' icon={bookmarkIcon} />
                        <p> {elemento.alive === true ? 'VIVO' : 'FINADO'} / {elemento.hogwartsStudent === true ? 'ESTUDIANTE' : 'STAFF'}
                        </p>
                        <img src={elemento.image} alt='personaje'/> 
                        <h3>{elemento.name}</h3>
                        <p>Cumpleaños: {elemento.dateOfBirth} </p>
                        <p>Género: {elemento.gender} </p>
                        <p>Color de ojos: {elemento.eyeColour} </p>
                        <p>Color de pelo: {elemento.hairColour}</p>
                    </div>    
                )
            } )} 
        
         </div>
    )
}

export default CardCharacter