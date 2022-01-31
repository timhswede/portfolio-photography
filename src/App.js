import React from 'react';
import './App.css';
import Home from './Home';
import Recent from './Recent';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import Upload from './Upload';
import{ BrowserRouter, Routes , Route } from 'react-router-dom';

//Recent albums
import audia4modern from './recent/audia4modern';

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/recent" component={Recent} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/recent/audia4modern" component={audia4modern} />


        </div>
    );
}

export default App;

