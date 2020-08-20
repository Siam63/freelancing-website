import React, {Component} from 'react';
import '../stylesheets/ServiceCardDetails.scss';

class ServiceCardDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            'title': this.props.title,
            'rating': this.props.rating,
            'reviews': this.props.reviews,
            'companyName': this.props.companyName
        }
    }

    clickHandler(){
        alert("Servicecard was clicked.")
    }

    render() {
        return (
            <div className="serviceCardDetails" onClick={this.clickHandler}>
                <div className="company-name">
                    {this.state.companyName}
                </div>
                <div className="rating">
                    {this.state.rating}/5
                </div>
                <div className="title">
                    {this.state.title}
                </div>
            </div>
        );
    }
}

export default ServiceCardDetails;