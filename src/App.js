import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Main from './containers/Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      example: false,
    };
  }

  enableLogo = () => {
    const { example } = this.state;
    this.setState({
      example: !example,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Menu />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
