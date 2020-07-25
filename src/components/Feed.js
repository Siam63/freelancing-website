import React, {Component} from 'react';
import axios from 'axios';
import '../stylesheets/Feed.scss';
import ServiceCard from "./ServiceCard";

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    "firstName": "Wasiur",
                    "lastName": "Rahman",
                    "title": "Kitchen Renovation",
                    "rating": 4.9,
                    "reviews": [
                        {
                            "review": "Amazing job",
                            "rating": 4.9
                        }
                    ],
                    "hourlyRateCents": 8000,
                    "profilePicture": "https://production-next-images-cdn.thumbtack.com/i/387354220087107594/width/320.webp"
                },
            ]
        };
    }

    // fetch sample posts
    componentDidMount() {
        // axios.get(`https://reqres.in/api/users`).then(res => {
        //         console.log(res);
        //         this.setState({
        //             posts: res.data.data
        //         });
        //     });
    }

    render() {
        return (
            <div className="feed">
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
            </div>
        );
    }
}

export default Feed;
