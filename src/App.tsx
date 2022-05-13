import React from 'react';
import './App.css';
import { Dialogs } from './Components/Dialogs/Dialogs';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route  path='/message' component={Dialogs}/>
                <Route path='/profile' component={Profile}/>
            </div>


        </div>
        </BrowserRouter>)

}

export default App;
