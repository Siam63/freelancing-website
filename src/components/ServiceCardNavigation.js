import React, {Component} from 'react';
import '../stylesheets/ServiceCardNavigation.scss';

class ServiceCardNavigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            'totalReviews': this.props.totalReviews,
            'hourlyRate': this.props.hourlyRate
        }
    }

    clickHandler = () => alert("The profile was clicked!");

    render() {
        console.log(this.state.reviews)
        return (
            <div className="service-card-navigation">
                <div className="hourly-rate">
                    ${this.state.hourlyRate}/Hour
                </div>
                <div className="num-reviews">
                    {
                        this.state.totalReviews === 0 ? <div>No reviews to show</div> : <div>{this.state.totalReviews} review(s) -
                            <div className="read-more-text">Read More</div>
                        </div>
                    }
                </div>
                <button className="view-profile" onClick={this.clickHandler}>View Profile</button>
            </div>
        );
    }
}

export default ServiceCardNavigation;