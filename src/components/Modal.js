import React, {Component} from "react";
import '../stylesheets/Modal.scss';

const ratingImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Green_star.svg/1024px-Green_star.svg.png";
const ratingImageGray = "https://purepng.com/public/uploads/large/purepng.com-grey-starstargeometricallydecagonconcavestardomclipartblackgrey-1421526502793oblca.png";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "showModal": this.props.showModal,
            'reviews': this.props.reviews
        }
    }

    componentWillReceiveProps(nextprops) {
        this.setState({
            reviews: nextprops.reviews,
            showModal: nextprops.showModal
        })
    }

    hideModalToggle = () => {
        this.setState({
            showModal: false
        });
    }

    render() {
        this.reviews = this.state.reviews.map((item) => {
            return <div>
                {
                    Array(5).fill(0).map((val, i) => {
                        if (i < Math.floor(item.rating)) {
                            return <img className="rating-image" src={ratingImage} alt='Rating Image' key={i}/>
                        } else{
                            return <img className="rating-image" src={ratingImageGray} alt='Rating Image Gray' key={i}/>
                        }
                    })
                }
                <p className="review-title">{item.reviewTitle}</p>
                <p className="review-comment">Comment: {item.reviewComment}</p>
            </div>
        })
        return (
            <div className={`${this.state.showModal ? "modal" : "modal-hidden"}`}>
                <div className="content">
                    <span className="close-button" onClick={this.hideModalToggle}>&times;</span>
                    <p>This person has {this.state.reviews.length} review(s).</p>
                    <p className="review-list2">{this.reviews}</p>
                </div>
            </div>
        );
    }
}

export default Modal