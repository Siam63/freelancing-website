import React, {Component} from 'react';
import '../stylesheets/Header.scss';
import { Link } from 'react-router-dom';

const companyImg = "https://www.articulatemarketing.com/hs-fs/hubfs/tech%20company%20logos%204%20-%20articulate%20logo.png?width=474&name=tech%20company%20logos%204%20-%20articulate%20logo.png"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    };

    signIn = () => alert("You have signed in!");
    signUp = () => alert("You have signed up!");
    buyPremium = () => alert("You have purchased a membership!");

    toggleSwitch = () => {
        this.setState({
            selected: !this.state.selected
        });
    };

    render() {
        return (
            <div className={this.state.selected ? "dark-mode" : "light-mode"}>
                {this.props.children}
                <img className="company-logo" src={companyImg} alt="companyLogo"/>
                <input type="text" id="search" className="search-bar" placeholder="Search for a Professional"/>
                <button className="btn-premium" onClick={this.buyPremium}>Buy Premium</button>
                <Link to='/'>
                    <h3 className="explore-text">Explore</h3>
                </Link>
                <h3 className="sign-in-text" onClick={this.signIn}>Sign-In</h3>
                <h3 className="sign-up-text" onClick={this.signUp}>Sign-Up</h3>
                <button className="light-toggle" onClick={this.toggleSwitch}>
                    {this.state.selected ? "Dark Mode" : "Light Mode" }
                </button>
            </div>
        );
    }
}

export default Header;