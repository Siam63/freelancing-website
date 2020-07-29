import React, {Component} from 'react';
import '../stylesheets/ServiceCardDetails.scss';

class ServiceCardDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            'firstName': this.props.firstName,
            'lastName': this.props.lastName,
            'title': this.props.title,
            'rating': this.props.rating,
            'reviews': this.props.reviews,
            'hourlyRate': this.props.hourlyRate
        }
    }

    clickHandler(){
        alert("Servicecard was clicked.")
    }

    render() {
        return (
            <div className="serviceCardDetails" onClick={this.clickHandler}>
                <div className="title">
                    {this.state.title}
                </div>
                <div className="fullName">
                    {this.state.firstName + " " + this.state.lastName} 
                </div>
                <div className="rating">
                    {this.state.rating}/5
                </div>
                <div className="hourlyRate">
                    ${this.state.hourlyRate}/hour
                </div>
            </div>
        );
    }
}

export default ServiceCardDetails;