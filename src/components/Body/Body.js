import React from 'react';
import Menu from './Menu';
import Home from './Home'; 
import Contact from './Contact';
import About from './About';
import {Routes,Route} from 'react-router-dom';


const Body = () => {
    return (
        <div>
            {/* <Menu /> */}
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/menu' exact element={<Menu />} />
                <Route path='/about' exact element={<About />} />
                <Route path='/contact' exact element={<Contact />} />
            </Routes>
        </div>
    );
};

export default Body;