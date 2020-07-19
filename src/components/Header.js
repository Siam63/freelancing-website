import React, {Component} from 'react';
import '../stylesheets/Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="header">
                {this.props.children}
                <h3 className= "company-name">COMPANY NAME / LOGO</h3>
            </div>
        );
    }
}

export default Header;