import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout} from 'antd';
import * as firebase from 'firebase';
import {config} from './firebase/firebase'
import {Input, Button} from 'antd'
import CreateUser from './component/auth/createUser'
import Home from './component/home/home'
import SignInUser from './component/auth/signInUser'
import { fire } from './firebase/firebase'
const fireauth = firebase.auth()
const {Header, Footer, Sider, Content} = Layout;

/*const carray = [0,1,2,3,4]
const c = 10
const newArray = [...carray, 10]*/
class App extends Component {

    state = {
        content: <SignInUser />,
        auth: false
    }

    componentWillMount() {
        
        //this.state.auth = true  < ----- WRONG
        fireauth.onAuthStateChanged((user) => { 
            if (user) {
                this.setState({
                    content: <Home />,
                    auth: true
                })
            } else { 
                this.setState({
                    content: <SignInUser />,
                    auth: false
                })
            }
        })
    }

  componentDidMount(){

  }
  


  render() {
      console.log(this.state.auth)
    return (
      <Layout style={{height:'100%'}}>
          <Header>
              <div style={{display:'flex', flexDirection:'row'}}>
                  <span style={{color:'white', fontSize: 20}}>Lesson Chat</span>
              </div>
          </Header>
          <Content style={{height:'100%'}}>
            <div>
                    {this.state.content}
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
