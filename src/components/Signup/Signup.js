import React from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Signup</h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm password" id="" required />
                    </div>
                    <input class="form-submit" type="submit" value="Signup" />
                </form>
                <p>
                    Already have an account? <Link className='form-link' to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;