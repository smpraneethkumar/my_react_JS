import React, { Component } from 'react'

export class ContactUs extends Component {

    state={
        firstName :"",
        lastName :"",
        email :"",
        phone :""
    }

    handleChange=(event)=> {
        const {name,value} = event.target
        this.setState({[name]: value })
        console.log(this.state);
        
    }
    handleSubmit = (event)=>{
        event.preventDefault()
    }
  render() {
    return (
      <>
    <h2>ContactUS</h2>
    <div className="container px-5">
        <div className="row"> 

        <form action="">
            <div className="col-md-4">
               <input type="text" 
               class="form-control" 
               name='firstName' 
               onChange={this.handleChange} 
               value={this.state.firstName}
                id="exampleFormControlInput1" 
                placeholder="Enter your first name"/>  
            </div>   
            <div className="col-md-4">
                 <input type="text" 
                 class="form-control" 
                 name='lastName' 
                 onChange={this.handleChange} 
                 value={this.state.lastName}
                  id="exampleFormControlInput2" 
                  placeholder="Enter your last name"/>
            </div>
            <div className="col-md-4">
                <input type="email" 
                class="form-control"
                 name='email'
                  onChange={this.handleChange} 
                  value={this.state.email} 
                  id="exampleFormControlInput3"
                   placeholder="Enter your email"/>
            </div>
            <div className="col-md-4">
                <input type="number"
                 class="form-control"
                  name='phone'
                   onChange={this.handleChange} 
                   value={this.state.phone} 
                   id="exampleFormControlInput4" 
                   placeholder="Enter your number "/><br/>

                   <button type="button" class="btn btn-primary">submit</button>
            </div>
        </form>
        </div>
        </div>
           </>
    )
  }
}

export default ContactUs