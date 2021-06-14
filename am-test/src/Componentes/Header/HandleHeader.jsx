import React, { useState } from 'react';
import AddCharacter from "./ModalAdd";

//import userAddOutlined from '@iconify-icons/ant-design/user-add-outlined';


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
        <div className='buttonsHeaderContainer'>
          <section className='buttonsFooter'>
            
            <div className='btnsFooter' onClick={openModal}
            > 
              <AddCharacter
              isOpen={isOpenModal}
              closeModal={closeModal}/>
            </div>
            
          </section>
          
        </div>
      );
    };
    
    export default HandleHeader;