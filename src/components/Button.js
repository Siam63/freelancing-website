import React, {Component} from 'react';
import '../stylesheets/Button.scss';

class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: this.props.text
        };
    }

    clickHandler = (e) => alert(e);
    
    render() {
        return (
            <button className="btn" onClick={() => this.clickHandler("The button was clicked!")}>
                {this.state.text}
            </button>
        );
    }
}

export default Button;