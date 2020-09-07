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
                <button className="btn-premium">Buy Premium</button>
                <Link to='/'>
                    <h3 className="explore-text">Explore</h3>
                </Link>
                <Link to='/signin'>
                    <h3 className="sign-in-text">Sign-In</h3>
                </Link>
                <Link to='/signup'>
                    <h3 className="sign-up-text">Sign-Up</h3>
                </Link>
                <button className="light-toggle" onClick={this.toggleSwitch}>
                    {this.state.selected ? "Dark Mode" : "Light Mode" }
                </button>
            </div>
        );
    }
}

export default Header;