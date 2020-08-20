import React, {Component} from 'react';
import '../stylesheets/Header.scss';

class Header extends Component {
    signIn = () => alert("You have signed in!");
    signUp = () => alert("You have signed up!");
    buyPremium = () => alert("You have purchased a membership!");

    render() {
        return (
            <div className="header">
                {this.props.children}
                <h3 className="company-header">COMPANY NAME / LOGO</h3>
                <input type="text" id="search" className="search-bar" placeholder="Search for a Professional"/>
                <button className="btn-premium" onClick={this.buyPremium}>Buy Premium</button>
                <button className="btn-signIn" onClick={this.signIn}>Sign-In</button>
                <button className="btn-signUp" onClick={this.signUp}>Sign-Up</button>
            </div>
        );
    }
}

export default Header;