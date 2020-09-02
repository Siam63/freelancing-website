import React, {Component} from 'react';
import ExploreHeader from "./ExploreHeader";
import ExploreSearch from "./ExploreSearch";
import ExploreFooter from "./ExploreFooter";

class Explore extends Component {
    render() {
        return (
            <div className='Explore'>
                <ExploreHeader/>
                <ExploreSearch/>
                <ExploreFooter/>
            </div>
        );
    }
}

export default Explore;