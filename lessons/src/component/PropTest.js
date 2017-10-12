import React, {Component} from 'react'

export default class PropTestClass extends Component {
    state = {
        defVal: null
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.value = 'blah'){
            this.setState({
                defVal: nextProps.value + nextProps.value
            })
        }
    }

    componentWillMount(){
        if(this.props.value === 'blah'){
            this.setState({
                defVal : this.props.value + ' unlimted blah'
            })
        }
    }

    componentDidMount(){

    }

  render(){
      return(
          <div>
              <span style={{fontSize: 50}}>{this.state.defVal}</span>
          </div>
      )
  }
}
