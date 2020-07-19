import React, {Component} from 'react';
import Header from './Header';
import Feed from './Feed';
import '../stylesheets/App.scss';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <Feed/>
        </div>
    );
  }
}

export default App;
