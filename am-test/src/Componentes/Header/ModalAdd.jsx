import React from "react";

const AddCharacter = ({ openModal, closeModal }) => {
  return (
    <div className={`modal ${openModal && "openModal"}`}>
      <div className="modalText">
        <div className="modalTitle">
          <p>Agrega un personaje</p>
          <button onClick={closeModal}>Cerrar</button>
        </div>
        <form className="modalInfo">
            <ul className='modalInputs'>
              <li>NOMBRE
            <input type="text" className='form'></input>
              </li>
              <li>CUMPLEAÑOS
            <input type="text" className='form'></input>
              </li>
              <li>COLOR DE OJOS
                <input type="text" className='form'></input>
              </li>
              <li>COLOR DE PELO
            <input type="text" className='form'></input>
              </li>
            </ul>
            <section className= 'modalMenuSelection'>
        <input type="radio" id="female" name="gender" value="female" />
        <label type="male">Mujer</label>
        <input type="radio" id="male" name="gender" value="male" />
        <label type="male">Hombre</label>
        <input type="radio" id="student" name="gender" value="student" />
        <label type="student">Estudiante</label>
        <input type="radio" id="staff" name="gender" value="staff" />
        <label type="staff">Staff</label>
        </section>
        <p>FOTOGRAFIA (input type file)</p>
        <input type="text" className='form'/>
        <div className='modalFooter'>
        <button className="btnSave">GUARDAR</button></div>
        </form>
      </div>
    </div>
  );
};

export default AddCharacter;