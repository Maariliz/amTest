import React from 'react'
import {Link} from 'react-router-dom'

const ButtonsNavigate = () => {
    return (
        <div className='containerButtons'>
            <Link to='/estudiantes'>
            <button className="btnStudents"> Estudiantes </button>
            </Link>
            <Link to='/staff'>
            <button className="btnStudents"> Staff </button>
            </Link>
        </div>
    )
}

export default ButtonsNavigate;