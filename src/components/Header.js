import React, {Component} from 'react';
import '../stylesheets/Header.scss';

const companyImg = "https://www.articulatemarketing.com/hs-fs/hubfs/tech%20company%20logos%204%20-%20articulate%20logo.png?width=474&name=tech%20company%20logos%204%20-%20articulate%20logo.png"

class Header extends Component {
    signIn = () => alert("You have signed in!");
    signUp = () => alert("You have signed up!");
    buyPremium = () => alert("You have purchased a membership!");
    exploreHandler = () => alert("You have pressed the explore button!");

    render() {
        return (
            <div className="header">
                {this.props.children}
                <img className="company-logo" src={companyImg} alt="companyLogo"/>
                <input type="text" id="search" className="search-bar" placeholder="Search for a Professional"/>
                <button className="btn-premium" onClick={this.buyPremium}>Buy Premium</button>
                <h3 className="explore-text" onClick={this.exploreHandler}>Explore</h3>
                <h3 className="sign-in-text" onClick={this.signIn}>Sign-In</h3>
                <h3 className="sign-up-text" onClick={this.signUp}>Sign-Up</h3>
            </div>
        );
    }
}

export default Header;