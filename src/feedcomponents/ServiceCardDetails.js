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
            'serviceCardTag': this.props.serviceCardTag
        }
    }

    render() {
        let tag = <div/>;
        if (this.state.reviews.length !== 0) {
            tag = <div className="service-card-tag">
                <div>{this.state.serviceCardTag}</div>
            </div>;
        }

        return <div className="serviceCardDetails">
            <div className="company-name">
                {this.state.companyName}
            </div>
            <Rating reviews={this.state.reviews}/>
            {tag}
            <div className="title">
                {this.state.title}
            </div>
            <div className="total-hires">
                {
                    this.state.totalHires === 1 ? <div>{this.state.totalHires} hire on this website</div> : <div>{this.state.totalHires} hires on this website</div>
                }
            </div>
        </div>;
    }
}

export default ServiceCardDetails;