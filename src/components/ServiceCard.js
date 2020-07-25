import React, {Component} from 'react';
import '../stylesheets/ServiceCard.scss';
import ServiceCardProfilePicture from "./ServiceCardProfilePicture";
import ServiceCardDetails from "./ServiceCardDetails";
import ServiceCardNavigation from "./ServiceCardNavigation";

class ServiceCard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="serviceCard">
                <ServiceCardProfilePicture/>
                <ServiceCardDetails/>
                <ServiceCardNavigation/>
            </div>
        );
    }
}

export default ServiceCard;