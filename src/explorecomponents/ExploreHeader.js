import React, {Component} from 'react';
import '../stylesheets/ExploreHeader.scss';
import { Link } from 'react-router-dom';

const companyImg = "https://www.articulatemarketing.com/hs-fs/hubfs/tech%20company%20logos%204%20-%20articulate%20logo.png?width=474&name=tech%20company%20logos%204%20-%20articulate%20logo.png"

class ExploreHeader extends Component {
    render() {
        return (
            <div className="explore-header">
                <img className="company-logo" src={companyImg} alt="companyLogo" />
                <button className="btn-get-started">Get Started!</button>
                <Link to='/main'>
                    <h3 className="explore-text">Feed</h3>
                </Link>
                <Link to='/signin'>
                    <h3 className="sign-in-text">Sign-In</h3>
                </Link>
                <Link to='/signup'>
                    <h3 className="sign-up-text">Sign-Up</h3>
                </Link>
            </div>
        );
    }
}

export default ExploreHeader;