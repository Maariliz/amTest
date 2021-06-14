import React, { useState } from "react";
const AddCharacter = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const [inputData, setInputData] = useState({
    name: '',
    dateOfBirth: '',
    eyeColour: '',
    hairColour: '',
    gender: '',
    hogwartsStudent: '',
    hogwartsStaff: '',
    image: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputData({ ...inputData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Agregar
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Agrega un personaje</h2>
            <p>
            <form className='modalBody' onSubmit={handleSubmit}>
          <ul className='modalInputs'>
            <li>
              NOMBRE
              <input
                type='text'
                id='name'
                className='form'
                value={inputData.name}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              CUMPLEAÑOS
              <input
                type='text'
                id='dateOfBirth'
                className='form'
                value={inputData.dateOfBirth}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              COLOR DE OJOS
              <input
                type='text'
                id='eyeColour'
                className='form'
                value={inputData.eyeColour}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              COLOR DE PELO
              <input
                type='text'
                id='hairColour'
                className='form'
                value={inputData.hairColour}
                onChange={handleChange}
              ></input>
            </li>
          </ul>
          <section className='modalSelection'>
            <input type='radio' id='gender' value='female' />
            <label type='male'>Mujer</label>
            <input type='radio' id='gender' value='male' />
            <label type='male'>Hombre</label>
            <input type='radio' id='hogwartsStudent' value='student' />
            <label type='student'>Estudiante</label>
            <input type='radio' id='hogwartsStaff' value='staff' />
            <label type='staff'>Staff</label>
          </section>
          <p>FOTOGRAFIA <input type="file"
          accept="image/png, image/jpeg"
          /></p>
         
          <div className='modalFooter'>
            <button className='btnSave' onClick={toggleModal}>GUARDAR</button>
            
          </div>
        </form>
            </p>
            <button className="close-modal" onClick={toggleModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default AddCharacter;