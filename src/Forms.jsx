import React, { Component } from 'react'

class Forms extends Component {

  constructor(props){
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email : "",
      phone : "",
      firstNameErr: "",
      lastNameErr: "",
      emailErr : "",
      phoneErr: ""
    };
  }
 
  
  
  handleValidation = () =>{
    let firstNameErr = ""
    let lastNameErr = ""
    let emailErr = ""
    let phoneErr = ""

    if (this.state.firstName.length < 3) {
      firstNameErr = "first should hava atleast 3 chars"
    }
    if (this.state.lastName.length < 1) {
      lastNameErr = "last should hava atleast 1 char"
    }
    if (this.state.email.include("@") < 3) {
      emailErr = "includes should hava atleast 3 chars"
    }
    if (this.state.phone.length !=10) {
      phoneErr = "number should hava atleast 10 chars"
    }
    if (firstNameErr || lastNameErr || emailErr || phoneErr){
      this.setState({firstNameErr,lastNameErr,emailErr,phoneErr})
    }

    
   }
   handleChange = (event) => {
    // console.log(event.target.value);.
    const { name, value } = event.target
    console.log(name, value);
    this.setState({ [name]: value })
    console.log(this.state);
    // console.log("sdfsfs");  
  }
   handleSubmit = (event) => {
    event.pervnetDefault()
    this.handleValidation()
   }
  render() {
   const {firstName,lastName,email,phone,firstNameErr,lastNameErr,emailErr,phoneErra} = this.state
    return (
<>
      <div className='container px-5 display:flex'>
        <div className="row">
          <div className='col md-4'>
            <div className="mb-4">
              <form action="#" onSubmit={this.handleSubmit}>
              <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
              <input type="text" className="form-control" name='firstName' id="exampleFormControlInput1" placeholder="Enter your first name"
                onChange={this.handleChange} />
                 <span className="text-danger">{firstNameErr}</span>
            </div>
          </div>
          <div className='col md-4'>
            <div className="mb-4">
              <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
              <input type="text" className="form-control" name='lastName' id="exampleFormControlInput2" placeholder="Enter your last name"
                onChange={this.handleChange} />
                 <span className="text-danger">{lastNameErr}</span>
            </div>
          </div>
          <div className='col md-4'>
            <div className="mb-4">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
              <input type="email" className="form-control" name="email" id="exampleFormControlInput3" placeholder="Enter your email"
                onChange={this.handleChange} />
                 <span className="text-danger">{emailErr}</span>
            </div>
          </div>
          <div className='col md-4'>
            <div className="mb-4">
              <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
              <input type="number" className="form-control" name='phone' id="exampleFormControlInput4" placeholder="Enter your number"
                onChange={this.handleChange} />
                 <span className="text-danger">{phoneErr}</span>
            </div>
          </div>
          <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary" />
            </form>      
            </div>
          
        </div>
      </>
    );
  }
}

export default Forms;