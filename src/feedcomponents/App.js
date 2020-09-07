import React, {Component} from 'react';
import Header from './Header';
import Feed from './Feed';
import '../stylesheets/App.scss';
import MainContent from "./MainContent";
import Modal from "./Modal";
import Explore from "../explorecomponents/Explore";
import SignUp from "../signupcomponents/SignUp";
import SignIn from "../signincomponents/SignIn";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          "showModal": false,
          "reviews": []
      };
  }

  showModalToggle = () => {
      this.setState({
          "showModal": true
      });
  }

  setReviews = (reviews) => {
      this.setState({
          "reviews": reviews
      })
  }

  render() {
    return (
        <Router>
            <Switch>
                <div className='App'>
                    <Route path="/" exact component={Explore}/>
                    <Route path="/main" component={MainContent}>
                        <Header/>
                        <Feed showModalToggle={this.showModalToggle} reviewSetter={this.setReviews}/>
                        <Modal reviews={this.state.reviews} showModal={this.state.showModal}/>
                    </Route>
                    <Route path="/signup" component={SignUp}/>
                    <Route path='/signin' component={SignIn}/>
                </div>
            </Switch>
        </Router>
    );
  }
}

export default App;