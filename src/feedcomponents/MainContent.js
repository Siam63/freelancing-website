import React, {Component} from 'react';
import '../stylesheets/MainContent.scss';

class MainContent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='maincontent'>
                {this.props.children}
            </div>
        );
    }
}

export default MainContent;