import React, {Component} from 'react';
import axios from 'axios';
import '../stylesheets/Feed.scss';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    // fetch sample posts
    componentDidMount() {
        axios.get(`https://reqres.in/api/users`).then(res => {
                console.log(res);
                this.setState({
                    posts: res.data.data
                });
            });
    }

    render() {
        return (
            <div className="feed">
                <ul>
                    {
                        this.state.posts.map((post) => {
                            return <li key={post.id}>{post.first_name}</li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Feed;
