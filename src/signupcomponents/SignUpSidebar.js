import React, {Component} from 'react';
import '../stylesheets/SignUpSidebar.scss';

const bkgImg = "https://i.pinimg.com/originals/4e/0f/68/4e0f683f152c1e201daacd7e6bf6d9b8.png";

class SignUpSidebar extends Component {
    render() {
        return (
            <div className='sign-up-sidebar-body'>
                <img src={bkgImg} alt="website background img"/>
            </div>
        );
    }
}

export default SignUpSidebar;