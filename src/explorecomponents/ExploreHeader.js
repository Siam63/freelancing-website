import React, {Component} from 'react';
import '../stylesheets/ExploreHeader.scss';
import { Link } from 'react-router-dom';

const companyImg = "https://www.articulatemarketing.com/hs-fs/hubfs/tech%20company%20logos%204%20-%20articulate%20logo.png?width=474&name=tech%20company%20logos%204%20-%20articulate%20logo.png"

class ExploreHeader extends Component {

    getStarted = () => alert("Ola comostas!");
    signIn = () => alert("You have signed in!");

    render() {
        return (
            <div className="explore-header">
                <img className="company-logo" src={companyImg} alt="companyLogo" />
                <button className="btn-get-started" onClick={this.getStarted}>Get Started!</button>
                <Link to='/main'>
                    <h3 className="explore-text">Feed</h3>
                </Link>
                <h3 className="sign-in-text" onClick={this.signIn}>Sign-In</h3>
                <Link to='/signup'>
                    <h3 className="sign-up-text" onClick={this.signUp}>Sign-Up</h3>
                </Link>
            </div>
        );
    }
}

export default ExploreHeader;