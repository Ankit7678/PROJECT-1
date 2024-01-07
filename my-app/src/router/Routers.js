import React from 'react';

import {Routes, Route, Navigate} from "react-router-dom";

import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import About from '../pages/About';
import Instruction from '../pages/Instruction';
import Reviews from '../pages/Reviews';

const Routers = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Navigate to ='/home' />} />
         <Route path='/home' element={<Home />} />
         <Route path='/login' element={<Login />} />
         <Route path='/about' element={<About />} />
         <Route path='/register' element={<Register />} />
         <Route path='/instruction' element={<Instruction />} />
         <Route path='/reviews' element={<Reviews />} />
        </Routes>
       
      
    </div>
  );
};

export default Routers;






// import React from "react";

// import {Routes, Route, Navigate} from "react-router-dom";

// import Home from './../pages/Home';
// import Tours from './../pages/Tours';
// import TourDetails from './../pages/TourDetails';
// import Login from './../pages/Login';
// import Register from './../pages/Register';
// import SearchResultList from './../pages/SearchResultList';

// const Routers = () => {
//     return (
//     <Routes>
//         <Route path='/' element={<Navigate to ='/home' />} />
//         <Route path='/home' element={<Home />} />
//         <Route path='/tours' element={<Tours />} />
//         <Route path='/tours/:id' element={<TourDetails />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/tours/search' element={<SearchResultList />} />
//     </Routes>
        
           
//     );

// };

// export default Routers;