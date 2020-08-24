import React, {Component} from 'react';
import '../stylesheets/Feed.scss';
import ServiceCard from "./ServiceCard";

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    "firstName": "Steve",
                    "lastName": "Cao",
                    "title": "Kitchen Renovation",
                    "rating": 4.9,
                    "companyName": "Something Ltd.",
                    "totalHires": 10,
                    "reviews": [
                        {
                            "review": "Amazing job",
                            "rating": 4.9
                        },
                        {
                            "review": "Amazing job",
                            "rating": 4.9
                        },
                        {
                            "review": "Amazing job",
                            "rating": 4.9
                        },
                        {
                            "review": "Amazing job",
                            "rating": 4.9
                        },
                        {
                            "review": "Amazing job",
                            "rating": 4.9
                        },
                        {
                            "review": "Amazing job",
                            "rating": 4.9
                        },
                        {
                            "review": "Amazing job",
                            "rating": 4.9
                        },
                        {
                            "review": "Amazing job",
                            "rating": 4.9
                        },
                        {
                            "review": "Amazing job",
                            "rating": 4.9
                        }
                    ],
                    "hourlyRate": 8000,
                    "profilePicture": "https://production-next-images-cdn.thumbtack.com/i/387354220087107594/width/320.webp",
                    "serviceCardTag": "In High Demand"
                },
                
                {
                    "firstName": "Michael",
                    "lastName": "Scott",
                    "title": "Plumber",
                    "rating": 4.2,
                    "totalHires": 8,
                    "companyName": "Something Enterprise",
                    "reviews": [
                        {
                            "review": "Great job!",
                            "rating": 4.2
                        }
                    ],
                    "hourlyRate": 5000,
                    "profilePicture": "https://vignette.wikia.nocookie.net/theoffice/images/b/be/Character_-_MichaelScott.PNG/revision/latest/top-crop/width/360/height/360?cb=20200413224550",
                    "serviceCardTag": "Responds Quickly"
                },

                {
                    "firstName": "Random",
                    "lastName": "Cao",
                    "title": "Kitchen Renovation",
                    "rating": 0,
                    "companyName": "Something Ltd.",
                    "totalHires": 10,
                    "reviews": [

                    ],
                    "hourlyRate": 8000,
                    "profilePicture": "https://production-next-images-cdn.thumbtack.com/i/387354220087107594/width/320.webp",
                    "serviceCardTag": "In High Demand"
                },
            ]
        };
    }

    render() {
        return (
            <div className="feed">
                {
                    this.state.posts.map((post, i) => {
                        return <ServiceCard post={post} key={i}/>;
                    })
                }
            </div>
        );
    }
}

export default Feed;
