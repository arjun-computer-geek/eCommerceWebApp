import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/layouts/Footer"
import Header from "./components/layouts/Header"
import ProductDetails from "./components/product/ProductDetails";


const App = () => {
    return (
        <Router>
            <Header/>
            <Route path = "/" component={Home} exact />
            <Route path = "/search/:keyword" component={Home} exact />
            <Route path = "/product/:id" component={ProductDetails} exact />
            <Footer/>
        </Router>
    )
}
export default App;