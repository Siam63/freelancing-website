import React, {Component} from 'react';
import Header from './Header';
import Feed from './Feed';
import Sidebar from './Sidebar';
import '../stylesheets/App.scss';
import MainContent from "./MainContent";
import Modal from "./Modal";

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
        <div className='App'>
            <Header/>
            <MainContent>
                <Sidebar/>
                <Feed showModalToggle={this.showModalToggle} reviewSetter={this.setReviews}/>
            </MainContent>
            <Modal reviews={this.state.reviews} showModal={this.state.showModal} />
        </div>
    );
  }
}

export default App;