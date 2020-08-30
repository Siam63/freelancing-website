import React, {Component} from 'react';
import '../stylesheets/ServiceCardNavigation.scss';

const messageImage = "https://cdn.iconscout.com/icon/free/png-512/message-537-461910.png";

class ServiceCardNavigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            'showContactForPrice': this.props.showContactForPrice,
            'totalReviews': this.props.totalReviews,
            'hourlyRate': this.props.hourlyRate,
            'reviews': this.props.reviews
        }
    }

    readMoreOnClick = () => {
        this.props.reviewSetter(this.state.reviews);
        this.props.showModalToggle();
    }

    viewProfileOnClick = () => {

    }

    render() {
        return (
            <div className="service-card-navigation">
                <div className="hourly-rate">
                    {
                        this.state.showContactForPrice ? <div className="contact-text"><img className="msg-img" src={messageImage} alt='Message Image'/>contact for price</div> : <div>${this.state.hourlyRate}/Hour</div>
                    }
                </div>
                <div className="num-reviews">
                    {
                        this.state.totalReviews === 0 ? <div>No reviews to show</div> : <div>{this.state.totalReviews} review(s) -
                            <div className="read-more-text" onClick={this.readMoreOnClick}>Read More</div>
                        </div>
                    }
                </div>
                <button className="view-profile" onClick={this.viewProfileOnClick}>View Profile</button>
            </div>
        );
    }
}

export default ServiceCardNavigation;