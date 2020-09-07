import React, {Component} from 'react';
import '../stylesheets/SignInContent.scss';
import { Link } from 'react-router-dom';

const bkgImg = "https://i.pinimg.com/originals/4e/0f/68/4e0f683f152c1e201daacd7e6bf6d9b8.png";

class SignInContent extends Component {
    render() {
        return (
            <div className='sign-in-content'>
                <span className="input-group">
                    <h1 className="title">Log into Existing Account</h1>
                    <input type="text" className="signin-search-bar" placeholder="Name or Email"/>
                    <input type="text" className="signin-search-bar" placeholder="Email"/>
                    <h3 className="pass">Forgot Your Password? Click Here.</h3>
                    <Link to='/'>
                        <h1 className="redirect-back">Redirect to main page</h1>
                    </Link>
                </span>
                <div className='sign-in-sidebar-body'>
                    <img src={bkgImg} alt="website background img"/>
                </div>
            </div>
        );
    }
}

export default SignInContent;