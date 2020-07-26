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
            'reviews': this.props.reviews
        }
    }

    render() {
        return (
            <div className="serviceCardDetails">
                <div className="title">
                    {this.state.title}
                </div>
                <div>
                    {this.state.firstName + " " + this.state.lastName} 
                </div>
                <div>
                    {this.state.rating}
                </div>
            </div>
        );
    }
}

export default ServiceCardDetails;