import React, {Component} from 'react';
import '../stylesheets/ServiceCardDetails.scss';

class ServiceCardDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            'title': this.props.title,
            'rating': this.props.rating,
            'reviews': this.props.reviews,
            'companyName': this.props.companyName,
            'totalHires': this.props.totalHires,
        }
    }

    render() {
        return (
            <div className="serviceCardDetails">
                <div className="company-name">
                    {this.state.companyName}
                </div>
                <div className="rating">
                    {this.state.rating}/5
                </div>
                <div className="title">
                    {this.state.title}
                </div>
                <div className="total-hires">
                    {this.state.totalHires} hires on this website
                </div>
            </div>
        );
    }
}

export default ServiceCardDetails;