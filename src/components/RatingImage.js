import React, {Component} from 'react';
import '../stylesheets/RatingImage.scss';

class RatingImage extends Component {
    constructor(props){
        super(props);
        this.state = {
            'ratingImage': props.ratingImage
        }
    }

    render() {
        return (
            <img className="ratingImage" src={this.state.ratingImage} alt='Rating Image'/>
        );
    }
}

export default RatingImage;