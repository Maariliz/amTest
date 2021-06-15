import React, {useState} from 'react';
import CardsStudents from '../Personajes/CardsStudents';
import CardStaff from '../Personajes/CardStaff'
import CardsAlive from '../Personajes/CardsAlive'
import CardsDeath from '../Personajes/CardsDeath'
import HandleHeader from '../Header/HandleHeader'


// import Background from '../../Assets/Background.png'
import naming from '../../Assets/naming.png'


const Home  = () => {

    
    const [CardsStudentsData, setCardsStudentsData] = useState ( true)
    const [CardStaffData, setCardStaffData] = useState(false)
    const [CardsAliveData, setCardsAliveData] = useState(false)
    const [CardsDeathData, setCardsDeathData] = useState(false)

    const handleCardsStudents = () => {
        setCardsStudentsData(true)
        setCardStaffData(false)
        setCardsAliveData(false)
        setCardsDeathData(false)
    }
    const handleCardStaff = () => { 
        setCardsStudentsData(false)
        setCardStaffData(true)
        setCardsAliveData(false)
        setCardsDeathData(false)
    }
    const handleCardsAlive = () => { 
        setCardsStudentsData(false)
        setCardStaffData(false)
        setCardsAliveData(true)
        setCardsDeathData(false)
    }
    const handleCardsDeath = () => { 
        setCardsStudentsData(false)
        setCardStaffData(false)
        setCardsAliveData(false)
        setCardsDeathData(true)
    }



    
    return (
        <div className='backgroundAsstes'>
            <header className='headerButtons' > 
                <HandleHeader/>
            </header>
            <div className="harryPotterLogo">
               <img src={naming} alt="HarryPotterLogo"/>
            </div>
            
            <div className="containerButtons">
                    <button className="btnsFilter" onClick={handleCardsStudents}>Estudiantes</button>
                    <button className="btnsFilter" onClick={handleCardStaff}>Staff</button>
                    <button className="btnsFilter" onClick={handleCardsAlive}>Personajes Vivos</button>
                    <button className="btnsFilter" onClick={handleCardsDeath}>Personajes Muertos</button>

                    <div className="rendersDataHP">
                        {CardsStudentsData === true ? <CardsStudents/> : null }
                        {CardStaffData === true ? <CardStaff/> : null}
                        {CardsAliveData === true ? <CardsAlive/> : null}
                        {CardsDeathData === true ? <CardsDeath/> : null}
            </div>
                
            </div>
            
            
            
           
            
        </div>
    )

}
export default Home