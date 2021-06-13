import React, { useState, useEffect } from 'react';

import axios from 'axios'

const dataAPI = 'http://localhost:5000/staff'
const CardsStaff = () => {
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
   
    
//    const status = (alive) => { 
        
//         if (alive === true){
//             return 'VIVO';
//         }else{
//             return 'FINADO'
//         }
//     }

//     const rol = (hogwartsStudent) => {
        
//         if ( hogwartsStudent === true){
//             return 'ESTUDIANTE';
//         }else{
//             return 'STAFF'
//         }
//     } 

    

    return (
         <div className="estudiantesList">
            

            {data.map (elemento => {
                return(
                    <div key= { elemento.name}>
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
export default CardsStaff