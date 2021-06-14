import React, {useState} from 'react';
import CardsStudents from '../Personajes/CardsStudents';
import CardStaff from '../Personajes/CardStaff'

import HandleHeader from '../Header/HandleHeader'

// import Background from '../../Assets/Background.png'
import naming from '../../Assets/naming.png'


const Home  = () => {

    
    const [CardsStudentsData, setCardsStudentsData] = useState ( true)
    const [CardStaffData, setCardStaffData] = useState(false)

    const handleCardsStudents = () => {
        setCardsStudentsData(true)
        setCardStaffData(false)
    }
    const handleCardStaff = () => { 
        setCardsStudentsData(false)
        setCardStaffData(true)
    }
    return (
        <div className='backgroundAsstes'>
            <div>
               <img src={naming} alt="HarryPotterLogo"/>
            </div>
            <header > 
                <HandleHeader/>
            </header>
            <div className="containerButtons">
                    <button className="btnsFilter" onClick={handleCardsStudents}>Estudiantes</button>
                    <button className="btnsFilter" onClick={handleCardStaff}>Staff</button>
                    <div className="rendersDataHP">
                        {CardsStudentsData === true ? <CardsStudents/> : null }
                        {CardStaffData === true ? <CardStaff/> : null}
            </div>
                
            </div>
            
            
            
           
            
        </div>
    )

}
export default Home