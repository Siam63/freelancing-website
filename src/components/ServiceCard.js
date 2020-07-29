import React, {Component} from 'react';
import '../stylesheets/ServiceCard.scss';
import ServiceCardProfilePicture from "./ServiceCardProfilePicture";
import ServiceCardDetails from "./ServiceCardDetails";
import ServiceCardNavigation from "./ServiceCardNavigation";

class ServiceCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            'post': {
                'profilePicture': this.props.post.profilePicture,
                'firstName': this.props.post.firstName,
                'lastName': this.props.post.lastName,
                'title': this.props.post.title,
                'rating': this.props.post.rating,
                'reviews': this.props.post.reviews,
                'hourlyRate': this.props.post.hourlyRate
            }
        };
    }

    render() {
        return (
            <div className="serviceCard">
                <ServiceCardProfilePicture profilePicture={this.state.post.profilePicture} />
                <ServiceCardDetails
                    firstName={this.state.post.firstName} 
                    lastName={this.state.post.lastName}
                    title={this.state.post.title}
                    rating={this.state.post.rating} 
                    reviews={this.state.post.reviews}
                    hourlyRate = {this.state.post.hourlyRate/100}/>
                <ServiceCardNavigation/>
            </div>
        );
    }
}

export default ServiceCard;