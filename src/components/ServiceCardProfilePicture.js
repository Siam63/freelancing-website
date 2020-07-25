import React, {Component} from 'react';
import '../stylesheets/ServiceCardProfilePicture.scss';

class ServiceCardProfilePicture extends Component {
    constructor(props){
        super(props);
        this.state = {
            'profilePicture': props.profilePicture
        }
    }

    render() {
        return (
            <img className="serviceCardProfilePicture" src={this.state.profilePicture} alt='Profile image'>
            </img>
        );
    }
}

export default ServiceCardProfilePicture;