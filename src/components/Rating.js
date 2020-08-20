import React, {Component} from 'react';
import '../stylesheets/Rating.scss';

class Rating extends Component {
    constructor(props){
        super(props);
        this.state = {
            'ratingImage': props.ratingImage
        }
    }

    render() {
        return (
            <div className="stars">
                {
                    Array(5).fill().map((_, i) => {
                        if (i + 1 < this.state.rating) {
                            return <img className="ratingImage" src={this.state.ratingImage} alt='Rating Image' key={i}/>
                        }
                    })
                }
            </div>
        );
    }
}

export default Rating;