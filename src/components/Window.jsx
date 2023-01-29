import React from 'react'
import Modal from 'react-modal'


Modal.setAppElement("#root")

export const Window = ({ show, onClose, item }) => {

   return (
      <Modal
         isOpen={show}
         onRequestClose={onClose}
         className="modal"
         overlayClassName="overlay"
      >
         <div className='close-btn-ctn'>
            <h1 style={{flex: '1 90%'}}>{item.title}</h1>
            <button className='close-btn' onClick={onClose}>X</button>
         </div>
      </Modal>
      )
}