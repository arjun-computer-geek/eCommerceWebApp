import React from 'react'
import{ Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

import MetaData from '../layouts/MetaData'
import Loader from '../layouts/MetaData'

const Profile = () => {

    const { user, loading} = useSelector(state => state.auth)

    return (
        <>
            {loading ? <Loader/> : (
                <>
                    <MetaData title={'your Profile'} />
                    <div className="container" style={{minHeight: '70vh'}}>
                        <h2 className="mt-5 ml-5">My Profile</h2>
                        <div className="row justify-content-around mt-5 user-info">
                            <div className="col-12 col-md-3">
                                <figure className='avatar avatar-profile'>
                                    <img className="rounded-circle img-fluid" src={user.avatar.url} alt={user.name} />
                                </figure>
                                <Link to="/me/update" id="edit_profile" className="btn1 btn-primary btn-block my-5">
                                    Edit Profile
                                </Link>
                            </div>
                    
                            <div className="col-12 col-md-5">
                                <h4>Full Name</h4>
                                <p>{user.name}</p>
                    
                                <h4>Email Address</h4>
                                <p>{user.email}</p>

                                <h4>Joined On</h4>
                                <p>{String(user.createdAt).substring(0, 10)}</p>
                                {user.role !== 'admin' && (
                                    <Link to="/orders/me" className="btn1 btn-danger btn-block mt-5">
                                        My Orders
                                    </Link>
                                )}

                                <Link href="/password/update" className="btn1 btn-primary btn-block mt-3">
                                    Change Password
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Profile
