import React, { Component } from 'react'

export class ContactUs extends Component {

    state={
        firstName :"",
        lastName :"",
        email :"",
        phone :"",
        firstNameErr:"",
        lastNameErr :"",
        emailErr:"",
        phoneErr:""
    }

    handleValidation = ()=>{
    let firstNameErr = ""
    let lastNameErr = ""
    let emailErr = ""
    let phoneErr = ""

     if(this.state.firstName.length < 3){
        firstNameErr= "first should be atleast 3 chars"; 
        // console.log(this.state.firstNameErr);
          
    }
     if(this.state.lastName.length <1){
        lastNameErr= "first should be atleast 3 chars";
    }
     if(!this.state.email.includes("@") ){
        emailErr= "first should be atleast 3 chars";
    }
     if(this.state.phone.length !=10){
        phoneErr= "first should be atleast 3 chars";
    }

    if (firstNameErr || lastNameErr || emailErr || phoneErr){
        this.setState({firstNameErr,lastNameErr,emailErr,phoneErr})
    }else{
         this.setState({firstNameErr,lastNameErr,emailErr,phoneErr})
    } 
    }

    handleChange=(event)=> {
        const {name,value} = event.target
        this.setState({[name]: value })
      
        
    }
    handleSubmit = (event)=>{
        event.preventDefault()
        this.handleValidation()
    };
  render() {

    
      const {firstName,lastName,email,phone,firstNameErr,lastNameErr,emailErr,phoneErr} = this.state
    return (
      <>
    <h2>ContactUS</h2>
    <div className="container px-5">
        <div className="row"> 

        <form action="">
            <div className="col-md-4">
               <input type="text" 
               className="form-control" 
               name='firstName' 
               onChange={this.handleChange} 
               value={firstName}
                id="exampleFormControlInput1" 
                placeholder="Enter your first name"/> 
                <span>{firstNameErr}</span> <br />
            </div>   
            <div className="col-md-4">
                 <input type="text" 
                 className="form-control" 
                 name='lastName' 
                 onChange={this.handleChange} 
                 value={lastName}
                  id="exampleFormControlInput2" 
                  placeholder="Enter your last name"/>
                  <span>{lastNameErr}</span>
            </div>
            <div className="col-md-4">
                <input type="email" 
                className="form-control"
                 name='email'
                  onChange={this.handleChange} 
                  value={email} 
                  id="exampleFormControlInput3"
                   placeholder="Enter your email"/>
                   <span>{emailErr}</span>
            </div>
            <div className="col-md-4">
                <input type="number"
                 className="form-control"
                  name='phone'
                   onChange={this.handleChange} 
                   value={phone} 
                   id="exampleFormControlInput4" 
                   placeholder="Enter your number "/>
                   <span>{phoneErr}</span>
                   <br/>

                   <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>submit</button>
            </div>
        </form>
        </div>
        </div>
           </>
    )
  }
}

export default ContactUs