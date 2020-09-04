import React, {Component} from 'react';
import '../stylesheets/SignUpContent.scss';
import { Link } from 'react-router-dom';

const bkgImg = "https://i.pinimg.com/originals/4e/0f/68/4e0f683f152c1e201daacd7e6bf6d9b8.png";

class SignUpContent extends Component {
    render() {
        return (
            <div className='sign-up-content'>
                <div className='sign-up-sidebar-body'>
                    <img src={bkgImg} alt="website background img"/>
                </div>
                <span className="input-group">
                    <h1 className="content-title">Create an Account</h1>
                    <input type="text" className="signup-search-bar" placeholder="Name"/>
                    <input type="text" className="signup-search-bar" placeholder="Email"/>
                    <input type="text" className="signup-search-bar" placeholder="Password"/>
                    <input type="text" className="signup-search-bar" placeholder="Re-type Password"/>
                    <h3 className="forgot-pass">Forgot Your Password? Click Here.</h3>
                    <Link to='/'>
                        <h1 className="redirect">Redirect to main page</h1>
                    </Link>
                </span>
            </div>
        );
    }
}

export default SignUpContent;