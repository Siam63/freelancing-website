import React, {Component} from 'react';
import '../stylesheets/Rating.scss';

const ratingImage = "https://www.pikpng.com/pngl/m/30-301248_file-gold-star-svg-yellow-star-transparent-background.png";

class Rating extends Component {
    constructor(props){
        super(props);
        this.state = {
            'reviews': this.props.reviews
        }
    }

    render() {
        let total = 0;
        for (let i = 0; i < this.state.reviews.length; i++) {
            total += this.state.reviews[i].rating;
        }
        let avgRatings = total / this.state.reviews.length;
        return (
            <div className="stars">
                <div className="ratings-text">({avgRatings.toFixed(2)})</div>
                {
                    Array(5).fill(0).map((val, i) => {
                        if (i < Math.floor(avgRatings)) {
                            return <img className="ratingImage" src={ratingImage} alt='Rating Image' key={i}/>
                        }
                    })
                }
            </div>
        );
    }
}

export default Rating;