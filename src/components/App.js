import React, {Component} from 'react';
import Header from './Header';
import Feed from './Feed';
import Button from './Button';
import Sidebar from './Sidebar';
import '../stylesheets/App.scss';
import MainContent from "./MainContent";

class App extends Component {
  render() {
    return (
        <div className='App'>
            <Header/>
            <MainContent>
                <Sidebar/>
                <Feed/>
            </MainContent>
        </div>
    );
  }
}

export default App;