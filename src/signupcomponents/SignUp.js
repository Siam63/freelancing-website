import React, {Component} from 'react';
import SignUpHeader from "./SignUpHeader";
import SignUpContent from "./SignUpContent";

class SignUp extends Component {
    render() {
        return (
            <div className='sign-up-body'>
                <SignUpHeader/>
                <SignUpContent/>
            </div>
        );
    }
}

export default SignUp;