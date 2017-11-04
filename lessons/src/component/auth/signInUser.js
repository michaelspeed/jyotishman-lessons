import React, { Component } from 'react';
import {Input, Button, message} from 'antd'
import {fire} from '../../firebase/firebase';
import * as firebase from 'firebase'
const fireauth = firebase.auth()


export default class SignInUser extends Component{
  state = {
      email: '',
      password:''
  };

  handleEmail = (e) => {
      console.log(e.target.value)
      this.setState({
          email: e.target.value
      })
  };

  handlePassword = (e) => {
      this.setState({
          password: e.target.value
      })
  };

  handlesubmit = () => {
      fireauth.signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
          console.log(error.message)
          message.error(error.message, 8)
      }).then((success) => {
          console.log(success)
          if(success !== undefined){
              message.success("sign in", 8)
          }
        })
      }

checkAuth = () => {
    fireauth.onAuthStateChanged((user) => { 
        if (user) {
            console.log("user available")
        } else { 
            console.log("user missing")
        }
    })
}

    render() {
        this.checkAuth()
        return(
          <div style={{height: 500, display: 'flex', alignItems: 'center', justifyContent:'center'}}>
              <div style={{width:  400}}>
                  <Input placeholder='Email' style={{marginBottom: 20}} onChange={this.handleEmail}/>
                  <Input placeholder='Password' type='password' style={{marginBottom: 20}} onChange={this.handlePassword}/>
                  <Button type='primary' onClick={this.handlesubmit}>Sign In</Button>
              </div>
          </div>

        )
      }
}
