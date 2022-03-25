import React, { useEffect, useState } from 'react';
import './App.css'
import Card from './Card/Card';
import Navbar from './Navbar/Navbar';
// import {Navbar2} from './Navbar/Navbar';
import Modal from 'react-modal';
import Cart from "./Cart/Cart";
import { CgCloseR } from "react-icons/cg";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

function openModal() {
  setIsOpen(true);
}

/* function afterOpenModal() {
  // references are now sync'd and can be accessed.
  subtitle.style.color = '#f00';
} */

function closeModal() {
  setIsOpen(false);
}

  const handleAddToCart = (gun) => { //gun  mane sob data  
    const newCart = [...cart, gun];  //object to array add with previous if there
    setCart(newCart);
  };


  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);


  return (
    <div>
      <Navbar cart={cart} openModal={openModal}/>
      <div className='card-container'>
        {/*  {
          guns.map((gun) => (
          <h1 gun={gun} key={gun.id}>{gun.name}</h1> 
          ))
        } */}

        {guns.map((gun) => (
          <Card gun={gun} key={gun.id} handleAddToCart={handleAddToCart} />
        ))}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <button className='modal-close-button' onClick={closeModal}>
          <CgCloseR size={30} />
        </button>
        {cart.length === 0 && (
          <div className='cart-warning'>
            <p> Cart is empty </p>
          </div>
        )}
        {cart.map((item) => (
          <Cart item={item}></Cart>
        ))}
      </Modal>
    </div>
);
}

export default App;