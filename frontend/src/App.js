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
import Profile from "./components/user/Profile";
import ProtectedRoute from "./components/route/ProtectedRoute";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";

import Cart from "./components/cart/Cart";
import Shipping from './components/cart/Shipping'
import ConfirmOrder from './components/cart/ConfirmOrder'


const App = () => {

    useEffect(() => {
        store.dispatch(loadUser())
    },[]);

    
    return (
        <Router>
            <Header/>
            <Route path = "/" component={Home} exact />
            <Route path = "/search/:keyword" component={Home}/>
            <Route path = "/product/:id" component={ProductDetails} exact />

            <Route path = "/cart" component={Cart} exact />
            <ProtectedRoute path = "/shipping" component={Shipping}/>
            <ProtectedRoute path = "/order/confirm" component={ConfirmOrder}/>

            <Route path = "/login" component={Login} />
            <Route path = "/register" component={Register} />
            <Route path = "/password/forgot" component={ForgotPassword} exact />
            <Route path = "/password/reset/:token" component={NewPassword} exact />
            <ProtectedRoute path = "/me" component={Profile} exact />
            <ProtectedRoute path = "/me/update" component={UpdateProfile} exact />
            <ProtectedRoute path = "/password/update" component={UpdatePassword} exact />
            <Footer/>
        </Router>
    )
}
export default App;