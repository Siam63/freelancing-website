import React, {Component} from 'react';
import '../stylesheets/ExploreHeader.scss';

const companyImg = "https://www.articulatemarketing.com/hs-fs/hubfs/tech%20company%20logos%204%20-%20articulate%20logo.png?width=474&name=tech%20company%20logos%204%20-%20articulate%20logo.png"

class ExploreHeader extends Component {

    getStarted = () => alert("Ola comostas!");
    signIn = () => alert("You have signed in!");
    signUp = () => alert("You have signed up!");



    render() {
        return (
            <div className="explore-header">
                <img className="company-logo" src={companyImg} alt="companyLogo" />
                <button className="btn-get-started" onClick={this.getStarted}>Get Started!</button>
                <h3 className="sign-in-text" onClick={this.signIn}>Sign-In</h3>
                <h3 className="sign-up-text" onClick={this.signUp}>Sign-Up</h3>
            </div>
        );
    }
}

export default ExploreHeader;