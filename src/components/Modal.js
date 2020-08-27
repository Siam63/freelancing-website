import React, {Component} from "react";
import '../stylesheets/Modal.scss';

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
        return (
            <div className={`${this.state.showModal ? "modal" : "modal-hidden"}`}>
                <div className="content">
                    <span className="close-button" onClick={this.hideModalToggle}>&times;</span>
                    <p>This person has {this.state.reviews.length} review(s) to show</p>
                </div>
            </div>
        );
    }
}

export default Modal