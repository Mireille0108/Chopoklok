import React from 'react'
import Header  from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Routes from '../../Router/Routers'
const Layout = () => {
  return (
    <div>
        <Header/>
        <div>
            <Routes/>
        </div>
        <Footer />
    </div>
  )
}

export default Layout;