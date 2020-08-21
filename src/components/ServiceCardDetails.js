import React, {Component} from 'react';
import '../stylesheets/ServiceCardDetails.scss';
import Rating from "./Rating";

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
                <Rating reviews={this.state.reviews}/>
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