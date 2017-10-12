import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTestClass from './component/PropTest';
import {Layout} from 'antd';
import FirstPage from './component/firstPage'
import SecondPage from './component/secondPage'

const {Header, Footer, Sider, Content} = Layout;

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
    return (
      <Layout>
          <Header>
              <div style={{display:'flex', flexDirection:'row'}}>
                  <span style={{color:'white'}}>Lesson Chat</span>
              </div>
          </Header>
          <Content>

          </Content>
          <Footer>

          </Footer>
      </Layout>
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
