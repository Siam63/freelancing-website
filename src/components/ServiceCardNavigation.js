import React, {Component} from 'react';
import '../stylesheets/ServiceCardNavigation.scss';

class ServiceCardNavigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            'hourlyRate': this.props.hourlyRate
        }
    }

    clickHandler = () => alert("The profile was clicked!");

    render() {
        return (
            <div className="serviceCardNavigation">
                <div className="hourlyRate">
                    ${this.state.hourlyRate}/Hour
                </div>
                <div className="num-reviews">
                    {this.state.reviews}
                </div>
                <button className="view-profile" onClick={this.clickHandler}>View Profile</button>
            </div>
        );
    }
}

export default ServiceCardNavigation;