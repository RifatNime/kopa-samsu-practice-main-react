import React from "react";
import "./Navbar.css";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = ({openModal, cart}) => {
// const Navbar = ({ cart, toggleModal }) => {
  return (
    <nav className='navbar'>
      <h1>Kopa Samsu Store</h1>
      <div className='cart-counter' onClick={openModal}>
        <span>{cart.length}</span>
        <BsFillCartFill className='icon2' color='#fff' />
      </div>
    </nav>
  );
};

/* export const Navbar2 = () => {
  return(
    <nav className='navbar'>
      <h1>Kopa Samsu Store</h1>
    </nav>
  )
} */
export default Navbar;
