import React, { Component } from 'react'

export class ClassComp extends Component {
  constructor(props){
super(props)
  }
  render() {
    return 
      <div>ClassComp
        <h4  className='display-1'>React.JS</h4>
        <button className="btn btn-outline-primary">+</button>
        <button className="btn btn-outline-danger">-</button>
        <button className="btn btn-outline-success" id='reset'>Reset</button>
      </div>
    
  }
}

export default ClassComp
