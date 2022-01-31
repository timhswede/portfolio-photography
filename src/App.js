import React from 'react';
import './App.css';
import Home from './Home';
import Recent from './Recent';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import Upload from './Upload';
import{ Route } from 'react-router-dom';

//Recent albums
import audib85db from './recent/audib85db';
import audib85irvine from './recent/audib85irvine';
import audis4mt from './recent/audis4mt';
import audis4drhs from './recent/audis4drhs';
import audis4irvine from './recent/audis4irvine';
import audia4drhs from './recent/audia4drhs';

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/recent" component={Recent} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/upload" component={Upload} />

            <Route exact path="/recent/audib85db" component={audib85db} />
            <Route exact path="/recent/audib85irvine" component={audib85irvine} />
            <Route exact path="/recent/audis4mt" component={audis4mt} />
            <Route exact path="/recent/audis4drhs" component={audis4drhs} />
            <Route exact path="/recent/audis4irvine" component={audis4irvine} />
            <Route exact path="/recent/audia4drhs" component={audia4drhs} />


        </div>
    );
}

export default App;

