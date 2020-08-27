import React, {Component} from 'react';
import Header from './Header';
import Feed from './Feed';
import Sidebar from './Sidebar';
import '../stylesheets/App.scss';
import MainContent from "./MainContent";

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          showModal: false
      };
  }

  showModalToggle = () => {
      this.setState({
          showModal: true
      });
  }

  hideModalToggle = () => {
      this.setState({
            showModal: false
        });
    }

  render() {
    return (
        <div className='App'>
            <Header/>
            <MainContent>
                <Sidebar/>
                <Feed showModalToggle={this.showModalToggle}/>
            </MainContent>
            <div className={`${this.state.showModal ? "modal" : "modal-hidden"}`}>
                <div className='modal-title'>Modal Title</div>
                <div className="content">
                    <span className="close-button" onClick={this.hideModalToggle}>&times;</span>
                    <p>This is a random modal</p>
                </div>
            </div>
        </div>
    );
  }
}

export default App;