import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'

import './Login.css';
import Loader from '../layouts/Loader';
import MetaData from '../layouts/MetaData';
import{ login, clearErrors } from '../../actions/userActions';

const Login = ({history}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);
    
    useEffect(() => {

        if(isAuthenticated){
            history.push('/')
        }

        if(error){
            alert.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, alert, isAuthenticated, error, history])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }


    return (
        <>
          {loading ? <Loader/> :(
              <>
                <MetaData title={'Login'} />
                <div className="container">
                    <div class="row wrapper"> 
                        <div class="col-10 col-lg-5">
                            <form class="shadow-lg" onSubmit={submitHandler}>
                                <h1 class="mb-3">Login</h1>
                                <div class="form-group">
                                    <label htmlFor="email_field">Email</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        class="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div class="form-group">
                                    <label htmlFor="password_field">Password</label>
                                    <input
                                        type="password"
                                        id="password_field"
                                        class="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <Link to="/password/forgot" class="float-right mb-4">Forgot Password?</Link>

                                <button
                                id="login_button"
                                type="submit"
                                class="btn btn-block py-3"
                                >
                                LOGIN
                                </button>

                                <Link to="/register" class="float-right mt-3">New User?</Link>
                            </form>
                        </div>
                    </div>
                </div>
              </>
          )}  
        </>
    )
}

export default Login
