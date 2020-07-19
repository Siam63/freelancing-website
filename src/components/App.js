import React, {Component} from 'react';
import Header from './Header';
import Feed from './Feed';
import Button from './Button';
import '../stylesheets/App.scss';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header>
              <Button text="Sign In"/>
              <Button text="Sign Up"/>
            </Header>
            <Feed/>
        </div>
    );
  }
}

export default App;
