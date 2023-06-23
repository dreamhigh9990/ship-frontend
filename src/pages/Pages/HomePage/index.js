import React from 'react';
import Home from './home';
import Components from './components';
import Contact from './contact';
import Footer from './footer';
import Navbar from './navbar';
import NotificaitonModal from './notification-modal';
const HomePage = () => {
    document.title = "Landing | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            
            <div className="layout-wrapper landing">
                <Home />
                <NotificaitonModal />
              
                <Components />
                
                <Contact />
                
                <Footer />
            </div>
          
        </React.Fragment>
    );
};

export default HomePage;