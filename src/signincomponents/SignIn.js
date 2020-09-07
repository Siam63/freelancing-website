import React, {Component} from 'react';
import SignInHeader from "./SignInHeader";
import SignInContent from "./SignInContent";

class SignIn extends Component {
    render() {
        return (
            <div className='sign-in-body'>
                <SignInHeader/>
                <SignInContent/>
            </div>
        );
    }
}

export default SignIn;