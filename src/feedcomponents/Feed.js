import React, {Component} from 'react';
import '../stylesheets/Feed.scss';
import ServiceCard from "./ServiceCard";

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    "fullName": "Steve Cao",
                    "title": "Kitchen Renovation",
                    "rating": 4.9,
                    "companyName": "Something Ltd.",
                    "totalHires": 10,
                    "reviews": [
                        {
                            "reviewTitle": "Amazing job",
                            "rating": 4.3,
                            "reviewComment": "Very friendly, my kitchen looks amazing!"
                        },
                        {
                            "reviewTitle": "Amazing person, fantastic job",
                            "rating": 4.3,
                            "reviewComment": "Very friendly, my kitchen looks amazing!"
                        },
                        {
                            "reviewTitle": "Great work",
                            "rating": 4.3,
                            "reviewComment": "Very friendly, my kitchen looks amazing!"
                        },
                    ],
                    "hourlyRate": 8000,
                    "profilePicture": "https://production-next-images-cdn.thumbtack.com/i/387354220087107594/width/320.webp",
                    "serviceCardTag": "In High Demand",
                    "showContactForPrice": false
                },
                
                {
                    "fullName": "Michael Scott",
                    "title": "Plumber",
                    "rating": 4.2,
                    "totalHires": 8,
                    "companyName": "Something Enterprise",
                    "reviews": [
                        {
                            "reviewTitle": "Great job",
                            "rating": 4.1,
                            "reviewComment": "Quick and easy, great price."
                        },
                        {
                            "reviewTitle": "Cool guy!",
                            "rating": 4.5,
                            "reviewComment": "Very cool, super quick and easy, great communication"
                        }
                    ],
                    "hourlyRate": 5000,
                    "profilePicture": "https://vignette.wikia.nocookie.net/theoffice/images/b/be/Character_-_MichaelScott.PNG/revision/latest/top-crop/width/360/height/360?cb=20200413224550",
                    "serviceCardTag": "Responds Quickly",
                    "showContactForPrice": false
                },

                {
                    "fullName": "Harold Jerry",
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
                    "fullName": "Arnold Kabar",
                    "title": "Gardener",
                    "rating": 2.7,
                    "companyName": "Whacky Weed Whisperer",
                    "totalHires": 6,
                    "reviews": [
                        {
                            "reviewTitle": "Very lazy",
                            "rating": 2.7,
                            "reviewComment": "Very lazy, but got the job done... 2 months later."
                        },
                        {
                            "reviewTitle": "Do not hire...",
                            "rating": 2.7,
                            "reviewComment": "Barely finished the task"
                        },
                        {
                            "reviewTitle": "Creepy and lazy",
                            "rating": 2.5,
                            "reviewComment": "Keeps staring at me. Super lazy."
                        }
                    ],
                    "hourlyRate": 4000,
                    "profilePicture": "https://www.legal500.com/wp-content/uploads/assets/legal500/lawyer_photos/10224/10248_1174867.jpg?v=1580315674",
                    "serviceCardTag": "In High Demand",
                    "showContactForPrice": false
                },

                {
                    "fullName": "Steve Cao",
                    "title": "Kitchen Renovation",
                    "rating": 4.9,
                    "companyName": "Something Ltd.",
                    "totalHires": 10,
                    "reviews": [
                        {
                            "reviewTitle": "Great",
                            "rating": 4.7,
                            "reviewComment": "Very amazing."
                        },
                        {
                            "reviewTitle": "Excellent",
                            "rating": 4.7,
                            "reviewComment": "Amazing job!"
                        },
                        {
                            "reviewTitle": "Great",
                            "rating": 4.9,
                            "reviewComment": "Very good!"
                        }
                    ],
                    "hourlyRate": 8000,
                    "profilePicture": "https://production-next-images-cdn.thumbtack.com/i/387354220087107594/width/320.webp",
                    "serviceCardTag": "In High Demand",
                    "showContactForPrice": false
                },
                {
                    "fullName": "Larry Gerald",
                    "title": "Contractor",
                    "companyName": "Larry Contracts",
                    "totalHires": 5,
                    "reviews": [
                        {
                            "reviewTitle": "Great",
                            "rating": 3.7,
                            "reviewComment": "Very amazing."
                        },
                        {
                            "reviewTitle": "Great",
                            "rating": 3.9,
                            "reviewComment": "Very amazing."
                        },
                        {
                            "reviewTitle": "Great",
                            "rating": 4.5,
                            "reviewComment": "Very amazing."
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
                        return <ServiceCard reviewSetter={this.props.reviewSetter} showModalToggle={this.props.showModalToggle} post={post} key={i}/>;
                    })
                }
            </div>
        );
    }
}

export default Feed;
