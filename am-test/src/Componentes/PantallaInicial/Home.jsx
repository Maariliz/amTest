import React, {useState} from 'react';
//import CardsStudents from '../Personajes/CardsStudents';
import CardsStudents from '../Personajes/CardsStudents';
import CardStaff from '../Personajes/CardStaff'
import Favoritos from '../Footer/favoritos';
import Agregar from '../Footer/agregar';

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
            <div className="btnsDataHP">
                <div className="buttons">
                    <button className="btnStudents" onClick={handleCardsStudents}>Estudiantes</button>
                    <button className="btnStaff" onClick={handleCardStaff}>Staff</button>
                </div>
            </div>
            <div className="rendersDataHP">
                {CardsStudentsData === true ? <CardsStudents/> : null }
                {CardStaffData === true ? <CardStaff/> : null}
            </div>
            
            
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
export default Home