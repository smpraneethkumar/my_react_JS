import React, { Component, Fragment } from 'react'

export class Dummyclass extends Component {
 constructor(props){
        super(props)
        
        
    }

state = {
    count : 0,
    name : "harsha"
}

countchange = ()=>{
    this.setState( prev => ({count : prev.count+1})

    )
}

  render() {
    const {fullname} = this.props


    return (
       
      <Fragment>
         <h1>{fullname}</h1>
        
        
        <h1>count:{this.state.count}</h1>
        <button className="btn btn-outline-primary" onClick={this.countchange}>click me</button>
        
        Dummyclass
        </Fragment>
    )
  }
}

export default Dummyclass