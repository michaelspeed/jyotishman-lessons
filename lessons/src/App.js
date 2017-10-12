import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTestClass from './component/PropTest';
import FirstPage from './component/firstPage'
import SecondPage from './component/secondPage'
class App extends Component {

  state = {
    intblah : 1,
    booleanblah: true,
      pageState: <div/>
  }

  onClickThis  = () => {
    this.setState({
      booleanblah: !this.state.booleanblah
    })
      this.blahinput.focus()
  }

  clickFirst = () => {
      this.setState({
          pageState: <FirstPage/>
      })
  }

  clickSecond = () => {
      this.setState({
          pageState: <SecondPage/>
      })

  }

  componentWillMount(){

  }

  componentDidMount(){

  }


  componentDidUnmount(){

  }




  render() {
      console.log(this)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          {this.state.booleanblah ? <p>Super duper blah</p> : <div></div>}
          <input ref={(blah) => { this.blahinput = blah}}/>
          <input ref={(goldy) => {this.goldyinput = goldy}}/>
        <a onClick={this.onClickThis}>clik blah</a>
          <div>
              <a onClick={this.clickFirst} >First</a>

          </div>
          <div>
              <a onClick={this.clickSecond}>Second</a>
          </div>
          {this.state.pageState}
          <div>
              <PropTestClass value={'blah'}/>
          </div>
      </div>
    );
  }
}

const FirstRender = () => {
    return(
        <div>
            <h1>First Render</h1>
        </div>
    )
}

export default App;
