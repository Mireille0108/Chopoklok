import React from 'react'
import Header  from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Routes from '../../Router/Routers';
import Carts from '../UI/Home-Cart/HomeCart.js';
import { useSelector } from 'react-redux';
const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <>
    <Header/>
        {showCart && <Carts />}
        <div>
            <Routes/>
        </div>
      <Footer />
    
    </>
        
    
    
  )
}

export default Layout;