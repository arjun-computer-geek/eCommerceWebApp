import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/layouts/Footer"
import Header from "./components/layouts/Header"


const App = () => {
    return (
        <Router>
            <Header/>
            <Route path = "/" component={Home} exact />
            <Footer/>
        </Router>
    )
}
export default App;