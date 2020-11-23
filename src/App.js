import React from 'react';
import './App.css';
import vboxss from './vbox.png';
import winxp from './winxp.jpg';

import TopBar from './Components/TopBar';
import Dock from './Components/Dock';

function App() {
    return (
        <div id="main-wrapper">
            <TopBar></TopBar>
            {/* <img id="bgimage" src={vboxss}/> */}
            <img id="bgimage" src={winxp}/>
            <Dock></Dock>
        </div>
    );
}

export default App;