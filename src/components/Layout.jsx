import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({children}) {
    return (
       <div className="layout__content">
            <Navbar/>
            <div className="layout__container">
                {children}
            </div>
            <Footer/>
       </div>
    );
}

export default Layout;