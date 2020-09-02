import React, {Component} from 'react';
import '../stylesheets/ExploreSearch.scss';

const img = "https://i0.wp.com/ctcatconnection.org/wp-content/uploads/2017/07/Cat-White-Background-Images.jpg?fit=848%2C530&ssl=1"

class ExploreSearch extends Component {
    render() {
        return (
            <div className="explore-body">
                <div className="container">
                    <img className="body-pic" src={img} alt="companyLogo"/>
                    <span className="input-group">
                        <h2 className="explore-title">Find Professionals or Clients</h2>
                        <input type="text" id="search" className="explore-search-bar" placeholder="Search for a Professional"/>
                    </span>
                </div>
            </div>
        );
    }
}

export default ExploreSearch;