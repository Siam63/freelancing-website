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
                'profilePicture': this.props.post.profilePicture
            }
        };
    }

    render() {
        return (
            <div className="serviceCard">
                <ServiceCardProfilePicture profilePicture={this.state.post.profilePicture} />
                <ServiceCardDetails/>
                <ServiceCardNavigation/>
            </div>
        );
    }
}

export default ServiceCard;