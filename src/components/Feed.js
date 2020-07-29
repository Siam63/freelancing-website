import React, {Component} from 'react';
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
                    "hourlyRate": 8000,
                    "profilePicture": "https://production-next-images-cdn.thumbtack.com/i/387354220087107594/width/320.webp"
                },
                
                {
                    "firstName": "Michael",
                    "lastName": "Scott",
                    "title": "Plumber",
                    "rating": 4.2,
                    "reviews": [
                        {
                            "review": "Great job!",
                            "rating": 4.2
                        }
                    ],
                    "hourlyRate": 5000,
                    "profilePicture": "https://vignette.wikia.nocookie.net/theoffice/images/b/be/Character_-_MichaelScott.PNG/revision/latest/top-crop/width/360/height/360?cb=20200413224550"
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
                {
                    this.state.posts.map((post, i) => {
                        return <ServiceCard post={post} key={i}></ServiceCard>;
                    })
                }
            </div>
        );
    }
}

export default Feed;
