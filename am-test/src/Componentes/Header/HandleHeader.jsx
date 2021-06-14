import React, { useState } from 'react';
import AddCharacter from "./ModalAdd";
import { Icon } from '@iconify/react';
import bookmarkIcon from '@iconify-icons/bi/bookmark';
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
            <button className='btnsFooter'
            > FAVORITOS <Icon type='button' icon={bookmarkIcon}/> 
            </button>
            <button className='btnsFooter' onClick={openModal}
            > AGREGAR 
            </button>
            <AddCharacter
              isOpen={isOpenModal}
              closeModal={closeModal}/>
          </section>
          
        </div>
      );
    };
    
    export default HandleHeader;