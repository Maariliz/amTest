import React, { useState } from 'react';
import AddCharacter from "./ModalAdd";

const HandleHeader = () => {
    const [isOpenModal, setIsOpenModal]= useState(true);
  
    // const [isOpenModal, openModal, closeModal]= useModal();
  
  
    const openModal=()=>{
      setIsOpenModal(true);
  
    }
  
    const closeModal=()=>{
      setIsOpenModal(false);
  
    }
    return (
        <div className='buttonsFooter'>
          <section className='buttonsFooter'>
            <button className='btnsFooter'
            > FAVORITOS </button>
            <button className='btnsFooter' onClick={openModal}> AGREGAR </button>
            <AddCharacter
              isOpen={isOpenModal}
              closeModal={closeModal}/>
          </section>
          
        </div>
      );
    };
    
    export default HandleHeader;