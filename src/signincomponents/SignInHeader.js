import React, {Component} from 'react';
import {Link} from "react-router-dom";

const companyImg = "https://www.articulatemarketing.com/hs-fs/hubfs/tech%20company%20logos%204%20-%20articulate%20logo.png?width=474&name=tech%20company%20logos%204%20-%20articulate%20logo.png"

class SignInHeader extends Component {
    render() {
        return (
            <div className='explore-header-body'>
                <Link to='/main'>
                    <img className="company-logo" src={companyImg} alt="companyLogo" />
                </Link>
                <button className="btn-premium" onClick={this.getPremium}>Get Premium!</button>
            </div>
        );
    }
}

export default SignInHeader;