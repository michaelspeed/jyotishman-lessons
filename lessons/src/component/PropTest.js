import React, {Component} from 'react'

export default class PropTest extends Component {

  render(){

    if(this.props.show){
      return(
        <div>
          <h1>show blah</h1>
          <p>hdjkhfjdsjkfdjksfgjkdshfjkdsjkfhjkshfjkshjkfhsjkfhjksfhjkshfjk</p>
        </div>
      )
    } else {
      return(
        <div>
          <h1>hide blah</h1>
          <p>dkls
          dss
          dsdsd
          sddds
          dddsd
          desc</p>
        </div>
      )

    }
  }
}
