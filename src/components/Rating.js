import React, {Component} from 'react';
import '../stylesheets/Rating.scss';

const ratingImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Green_star.svg/1024px-Green_star.svg.png";
const ratingImageGray = "https://purepng.com/public/uploads/large/purepng.com-grey-starstargeometricallydecagonconcavestardomclipartblackgrey-1421526502793oblca.png";

class Rating extends Component {
    constructor(props){
        super(props);
        this.state = {
            'reviews': this.props.reviews
        }
    }

    render() {
        let total = 0;
        let avgRatings = 0;
        for (let i = 0; i < this.state.reviews.length; i++) {
            total += this.state.reviews[i].rating;
        }
        if(this.state.reviews.length !== 0){
            avgRatings = total / this.state.reviews.length;
        }
        let ratingText = "";

        if(Math.floor(avgRatings) >= 1 && Math.floor(avgRatings) < 2){
            ratingText = "Poor";
        }else if(Math.floor(avgRatings) >= 2 && Math.floor(avgRatings) < 3){
            ratingText = "OK";
        }else if(Math.floor(avgRatings) >= 3 && Math.floor(avgRatings) < 4){
            ratingText = "Good";
        }else if(Math.floor(avgRatings) >= 4 && Math.floor(avgRatings) <= 5){
            ratingText = "Excellent";
        }else{
            ratingText = "";
        }

        return (
            <div className="stars">
                {
                    ratingText !== "" ? <h3 className="rating-text">{ratingText}</h3> : <div/>
                }
                {
                    Array(5).fill(0).map((val, i) => {
                        if (i < Math.floor(avgRatings)) {
                            return <img className="ratingImage" src={ratingImage} alt='Rating Image' key={i}/>
                        }else{
                            return <img className="ratingImage-gray" src={ratingImageGray} alt='Rating Image Gray' key={i}/>
                        }
                    })
                }
                <div className="rating-value">({avgRatings.toFixed(1)})</div>
            </div>
        );
    }
}

export default Rating;