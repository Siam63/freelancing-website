import React, {Component} from 'react';
import '../stylesheets/ServiceCard.scss';
import ServiceCardProfilePicture from "./ServiceCardProfilePicture";
import ServiceCardDetails from "./ServiceCardDetails";
import ServiceCardNavigation from "./ServiceCardNavigation";
import Rating from "./Rating";

class ServiceCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            'post': {
                'profilePicture': this.props.post.profilePicture,
                'title': this.props.post.title,
                'rating': this.props.post.rating,
                'reviews': this.props.post.reviews,
                'hourlyRate': this.props.post.hourlyRate,
                'companyName': this.props.post.companyName,
                'totalHires': this.props.post.totalHires,
                'serviceCardTag': this.props.post.serviceCardTag
            }
        };
    }

    render() {
        return (
            <div className="service-card">
                <ServiceCardProfilePicture profilePicture={this.state.post.profilePicture}/>
                <ServiceCardDetails
                    companyName={this.state.post.companyName}
                    title={this.state.post.title}
                    rating={this.state.post.rating}
                    totalHires={this.state.post.totalHires}
                    reviews={this.state.post.reviews}
                    serviceCardTag={this.state.post.serviceCardTag}
                />
                <ServiceCardNavigation hourlyRate={this.state.post.hourlyRate/100}/>
            </div>
        );
    }
}

export default ServiceCard;