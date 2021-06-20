import React from 'react'
import{ Link, Route } from 'react-router-dom'
import{ useDispatch, useSelector} from 'react-redux'
import{ useAlert } from 'react-alert'
import Search from './Search'
import { Dropdown } from 'react-bootstrap';
import { logout } from '../../actions/userActions';

const Header = () => {
    
    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth);

    const logoutHandler = () =>{
        dispatch(logout());
        alert.success('Logged out successfully');
    }

    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <Link to="/"><img src="images/logo.png" alt="logo" width="400px" height="80px"/></Link>
                    </div>
                    <nav>
                        {/* <ul ref={menuItems}> */}
                        <ul>
                            <li>
                                <Route render={({history}) => <Search history={history} />} />
                            </li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Contact</Link></li>
                            <li>    
                                <Link to="/cart"><img src="images/bag.png" alt="" width="30px" height="30px"/></Link>
                            </li>
                            {user ? (
                                <li>
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <figure className="avatar avatar-nav">
                                                <img 
                                                src={user.avatar && user.avatar.url} 
                                                alt={user && user.name}
                                                className="rounded-circle"
                                                />
                                                <span>{user && user.name}</span>
                                            </figure>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {user && user.role !== 'admin' ? (
                                                <Dropdown.Item>
                                                    <Link to="/orders/me">
                                                        Orders
                                                    </Link>
                                                </Dropdown.Item>
                                            ) :(
                                                <Dropdown.Item>
                                                    <Link to="/dashboard">
                                                        Dashboard
                                                    </Link>
                                                </Dropdown.Item>
                                            )}

                                            <Dropdown.Item>
                                                <Link to="/me">
                                                    Profile
                                                </Link>
                                            </Dropdown.Item>

                                            <Dropdown.Item>
                                                <Link className="text-danger" to="/" onClick={logoutHandler}>
                                                    Logout
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            ) : !loading && <li><Link to="/login">Login</Link></li>}
                            
                        </ul>
                            <img className="menu-icon" src="images/menu.png" alt="mneu" width="30px" height="30px" />
                    </nav>
                </div>
            </div>
        </div>
    )
}


export default Header
