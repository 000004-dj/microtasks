import React from 'react';
import './App.css';
import {Header} from "./site/header/header";
import {Body} from "./site/body/body";
import {Footer} from "./site/footer/footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
