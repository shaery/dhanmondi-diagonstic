import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="m-5">
            <h2>Please Register!!!</h2>
            <form>
                <p>Email <input type="email" className="m-2 w-75 form-control" /></p>
                <p>Password <input type="password" className="m-2 w-75 form-control" /></p>
                <input type="submit" className="m-2" />
            </form>
            <Link to="/login">Already registered?</Link>
        </div>
    );
};

export default Register;