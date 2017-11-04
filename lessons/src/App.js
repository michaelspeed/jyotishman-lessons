import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout} from 'antd';
import * as firebase from 'firebase';
import {config} from './firebase/firebase'
import {Input, Button} from 'antd'
import CreateUser from './component/auth/createUser'
import SignInUser from './component/auth/signInUser'
const {Header, Footer, Sider, Content} = Layout;

class App extends Component {

  componentWillMount(){

  }

  componentDidMount(){

  }


  render() {
    return (
      <Layout style={{height:'100%'}}>
          <Header>
              <div style={{display:'flex', flexDirection:'row'}}>
                  <span style={{color:'white', fontSize: 20}}>Lesson Chat</span>
              </div>
          </Header>
          <Content style={{height:'100%'}}>
            <div>
                <SignInUser/>
            </div>
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
