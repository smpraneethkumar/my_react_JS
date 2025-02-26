import React, { Component } from 'react'
import { IoConstruct } from 'react-icons/io5'

export class Clas_state_props extends Component {
  constructor(props){
    super(props)

    this.state={
      count:0
    }
  }
  
  render() {
  console.log(this.props);
 let you = "praneeth" 

  
    
    return (
      <div>
        <h2>Clas_state_props</h2>
        <h4>my name is {you}</h4>
        <h4>and i have one more brother he is {this.props.anna1} anna and his age is .</h4>
        <button className='btn btn-outline-primary'>Counter :{this.state.count} </button>
      </div>
    )
  }
}

export default Clas_state_props