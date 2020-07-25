import React, {Component} from 'react';
import '../stylesheets/Sidebar.scss';

class Sidebar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={"sidebar"}>
                Sidebar
            </div>
        );
    }
}

export default Sidebar;