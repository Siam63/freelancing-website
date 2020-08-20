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
                    "reviews": [
                        {
                            "review": "Amazing job",
                            "rating": 4.9
                        }
                    ],
                    "hourlyRate": 8000,
                    "profilePicture": "https://production-next-images-cdn.thumbtack.com/i/387354220087107594/width/320.webp",
                    "ratingImage": "https://lh3.googleusercontent.com/proxy/z-Nl6fqXwox2DpJdOXkQEtbs2xNgipkL589dd7rSKZNxgEYM2sbNYEyeZaE_nhXEoFJPiKi6pS4exLp262HS5SYSRvp_eWSGIMPgxHXRnD2Sigha-Q"
                },
                
                {
                    "firstName": "Michael",
                    "lastName": "Scott",
                    "title": "Plumber",
                    "rating": 4.2,
                    "companyName": "Something Enterprise",
                    "reviews": [
                        {
                            "review": "Great job!",
                            "rating": 4.2
                        }
                    ],
                    "hourlyRate": 5000,
                    "profilePicture": "https://vignette.wikia.nocookie.net/theoffice/images/b/be/Character_-_MichaelScott.PNG/revision/latest/top-crop/width/360/height/360?cb=20200413224550",
                    "ratingImage": "https://lh3.googleusercontent.com/proxy/z-Nl6fqXwox2DpJdOXkQEtbs2xNgipkL589dd7rSKZNxgEYM2sbNYEyeZaE_nhXEoFJPiKi6pS4exLp262HS5SYSRvp_eWSGIMPgxHXRnD2Sigha-Q"
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
