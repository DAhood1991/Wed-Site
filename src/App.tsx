import React from 'react';
import './App.css';
import {Messages} from './Components/Dialogs/Messages';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./Components/News/news";
import {Settings} from "./Components/Settings/settings";
import {Music} from "./Components/Music/music";
import {RootStateType} from "./State/State";
import {Sidebar} from "./Components/Sidebar/Sidebar";

type AppType = {
    state: RootStateType
}

function App(props: AppType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/messages' render={() => <Messages state={props.state.DialogsPage}/>}/>
                <Route path='/profile' render={() => <Profile state={props.state.ProfilePage}/>}/>
                <Route path='/news' render={() => <News title={"Bitcoin is DEAD"}/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/friends' render={()=><Sidebar/>}/>
            </div>
        </div>
    )

}

export default App;
