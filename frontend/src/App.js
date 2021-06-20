import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/layouts/Footer"
import Header from "./components/layouts/Header"
import ProductDetails from "./components/product/ProductDetails";
import Login from "./components/user/Login";
import Register from "./components/user/Register";

import { loadUser } from './actions/userActions';
import store from './store';
import { useEffect } from "react";


const App = () => {

    useEffect(() => {
        store.dispatch(loadUser())
    },[]);

    
    return (
        <Router>
            <Header/>
            <Route path = "/" component={Home} exact />
            <Route path = "/search/:keyword" component={Home} exact />
            <Route path = "/product/:id" component={ProductDetails} exact />
            <Route path = "/login" component={Login} exact />
            <Route path = "/register" component={Register} exact />
            <Footer/>
        </Router>
    )
}
export default App;