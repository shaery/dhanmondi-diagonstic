import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="m-5">
            <h2>Please Login first!</h2>
            <button onClick={signInUsingGoogle}>Sign In with Google</button> <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;