import React, {Component} from 'react';
import ExploreHeader from "./ExploreHeader";
import ExploreSearch from "./ExploreSearch";
import ExploreServices from "./ExploreServices";

class Explore extends Component {
    render() {
        return (
            <div className='Explore'>
                <ExploreHeader/>
                <ExploreSearch/>
                <ExploreServices/>
            </div>
        );
    }
}

export default Explore;