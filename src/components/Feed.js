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
                    "serviceCardTag": "In High Demand",
                    "showContactForPrice": false
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
                    "serviceCardTag": "Responds Quickly",
                    "showContactForPrice": false
                },

                {
                    "firstName": "Harold",
                    "lastName": "Jerry",
                    "title": "Carpenter",
                    "rating": 0,
                    "companyName": "Something Else Company",
                    "totalHires": 1,
                    "reviews": [

                    ],
                    "hourlyRate": 4000,
                    "profilePicture": "https://pbs.twimg.com/media/Darn-y9X4AAlyoz.jpg",
                    "serviceCardTag": "In High Demand",
                    "showContactForPrice": false
                },

                {
                    "firstName": "Arnold",
                    "lastName": "Kabar",
                    "title": "Gardener",
                    "rating": 2.7,
                    "companyName": "Something Else Company",
                    "totalHires": 6,
                    "reviews": [
                        {
                            "review": "Great job!",
                            "rating": 2.7
                        },
                        {
                            "review": "Great job!",
                            "rating": 2.7
                        },
                        {
                            "review": "Great job!",
                            "rating": 2.9
                        }
                    ],
                    "hourlyRate": 4000,
                    "profilePicture": "https://www.legal500.com/wp-content/uploads/assets/legal500/lawyer_photos/10224/10248_1174867.jpg?v=1580315674",
                    "serviceCardTag": "In High Demand",
                    "showContactForPrice": false
                },

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
                    "serviceCardTag": "In High Demand",
                    "showContactForPrice": false
                },
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
                    "serviceCardTag": "In High Demand",
                    "showContactForPrice": false
                },
                {
                    "firstName": "Larry",
                    "lastName": "Gerald",
                    "title": "Contractor",
                    "companyName": "Larry Contracts",
                    "totalHires": 5,
                    "reviews": [
                        {
                            "review": "Amazing job",
                            "rating": 3.7
                        },
                        {
                            "review": "Amazing job",
                            "rating": 3.9
                        },
                        {
                            "review": "Amazing job",
                            "rating": 3.8
                        },
                    ],
                    "hourlyRate": 0,
                    "profilePicture": "https://production-next-images-cdn.thumbtack.com/i/387354220087107594/width/320.webp",
                    "serviceCardTag": "In High Demand",
                    "showContactForPrice": true
                },
            ]
        };
    }

    render() {
        return (
            <div className="feed">
                {
                    this.state.posts.map((post, i) => {
                        return <ServiceCard showModalToggle={this.props.showModalToggle} post={post} key={i}/>;
                    })
                }
            </div>
        );
    }
}

export default Feed;
