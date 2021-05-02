import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Footer from './components/layout/Footer';
import Home from './components/Home';
import Navbar from './components/layout/Navbar';

const App = () => {
    return(
        <>
            <Router>
                <Navbar />
                <Route path="/" component={Home} exact />
                <Footer/>
           </Router>
        </>
    )
}

export default App;