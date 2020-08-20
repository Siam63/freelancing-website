import React, {Component} from 'react';
import '../stylesheets/Sidebar.scss';

class Sidebar extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     text: this.props.text
        // }
    }

    render() {
        return (
            <div className={"sidebar"}/>
        );
    }
}

export default Sidebar;