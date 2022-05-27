import React from 'react';
import './App.css';
import { Dialogs } from './Components/Dialogs/Dialogs';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/news";
import {Settings} from "./Components/Settings/settings";
import {Music} from "./Components/Music/music";


function App() {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route  path='/dialogs' component={Dialogs}/>
                <Route  path='/profile' component={Profile}/>
                <Route  path='/news' component={News}/>
                <Route  path='/settings' component={Settings}/>
                <Route  path='/music' component={Music}/>
            </div>


        </div>
        </BrowserRouter>)

}

export default App;
