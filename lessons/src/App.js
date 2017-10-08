import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTest from './component/PropTest';

class App extends Component {

  state = {
    intblah : 1,
    booleanblah: true
  }

  onClickThis  = () => {
    this.setState({
      booleanblah: !this.state.booleanblah
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a onClick={this.onClickThis}>clik blah</a>
        <PropTest show = {this.state.booleanblah} />
      </div>
    );
  }
}

export default App;
