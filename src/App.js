import React from 'react';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AddVolunteer from './Pages/AddVolunteer/AddVolunteer';
import { ToastContainer } from 'react-toastify';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';
import VolunteerRegister from './Pages/VolunteerRegister/VolunteerRegister';


function App() {

  return (

    <>
      
        <Header> </Header>
        <Routes>
            <Route path='/' element={ <Home /> }>  </Route>

            <Route path='/addvolunteer' element={ 
                <RequireAuth>
                  <AddVolunteer /> 
                </RequireAuth>
             }>  </Route>
            
            <Route path='/volunterregister/:id' element={ 
              <RequireAuth>
                  <VolunteerRegister />
              </RequireAuth>
             }> </Route>
            
            <Route path='/' element={ <Home /> }>  </Route>
            <Route path='/register' element={ <Register /> }>  </Route>
            <Route path='/login' element={ <Login /> }>  </Route>
        </Routes>
        <Footer> </Footer>
        <ToastContainer> </ToastContainer>
    
    </>


  );
}

export default App;
