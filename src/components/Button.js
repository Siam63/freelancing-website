import React, {Component} from 'react';
import '../stylesheets/Button.scss';

class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: this.props.text
        };
    }

    render() {
        return (
            <button className="btn">
                {this.state.text}
            </button>
        );
    }
}

export default Button;