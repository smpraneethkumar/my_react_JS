import React, { Component } from 'react'

export class Forms extends Component {
    handleChange(event){
        console.log(event.target.value);
        
    }
  render() {
    return (
      <div className='container px-5'>
          <div className="row">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
            <input type="text" className="form-control" name='firstname' id="exampleFormControlInput1" placeholder="Enter your first name" 
              onChange={this.handleChange}  />
            </div>
            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
            <input type="text" className="form-control" name='lastname' id="exampleFormControlInput2" placeholder="Enter your last name"/>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" className="form-control" name="email"id="exampleFormControlInput3" placeholder="Enter your email"/>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
            <input type="number" className="form-control" name='phone' id="exampleFormControlInput4" placeholder="Enter your number"/>
            </div>
          </div>
      </div>
    )
  }
}

export default Forms