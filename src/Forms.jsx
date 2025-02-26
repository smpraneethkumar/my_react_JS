// import React, { Component } from 'react'

// class Forms extends Component {

//   constructor(props){
//     super(props);

//     this.state = {
//       firstName: "",
//       lastName: "",
//       email : "",
//       phone : "",
//       firstNameErr: "",
//       lastNameErr: "",
//       emailErr : "",
//       phoneErr: ""
//     };
//   }
 
  
  
//   handleValidation = () =>{
//     let firstNameErr = ""
//     let lastNameErr = ""
//     let emailErr = ""
//     let phoneErr = ""

//     if (this.state.firstName.length < 3) {
//       firstNameErr = "first should hava atleast 3 chars"
//     }
//     if (this.state.lastName.length < 1) {
//       lastNameErr = "last should hava atleast 1 char"
//     }
//     if (this.state.email.include("@") < 3) {
//       emailErr = "includes should hava atleast 3 chars"
//     }
//     if (this.state.phone.length !=10) {
//       phoneErr = "number should hava atleast 10 chars"
//     }
//     if (firstNameErr || lastNameErr || emailErr || phoneErr){
//       this.setState({firstNameErr,lastNameErr,emailErr,phoneErr})
//     }

    
//    }
//    handleChange = (event) => {
//     // console.log(event.target.value);.
//     const { name, value } = event.target
//     console.log(name, value);
//     this.setState({ [name]: value })
//     console.log(this.state);
//     // console.log("sdfsfs");  
//   }
//    handleSubmit = (event) => {
//     event.pervnetDefault()
//     this.handleValidation()
//    }
//   render() {
//    const {firstName,lastName,email,phone,firstNameErr,lastNameErr,emailErr,phoneErra} = this.state
//     return (
// <>
//       <div className='container px-5 display:flex'>
//         <div className="row">
//           <div className='col md-4'>
//             <div className="mb-4">
//               <form action="#" onSubmit={this.handleSubmit}>
//               <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
//               <input type="text" className="form-control" name='firstName' id="exampleFormControlInput1" placeholder="Enter your first name"
//                 onChange={this.handleChange} />
//                  <span className="text-danger">{firstNameErr}</span>
//             </div>
//           </div>
//           <div className='col md-4'>
//             <div className="mb-4">
//               <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
//               <input type="text" className="form-control" name='lastName' id="exampleFormControlInput2" placeholder="Enter your last name"
//                 onChange={this.handleChange} />
//                  <span className="text-danger">{lastNameErr}</span>
//             </div>
//           </div>
//           <div className='col md-4'>
//             <div className="mb-4">
//               <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
//               <input type="email" className="form-control" name="email" id="exampleFormControlInput3" placeholder="Enter your email"
//                 onChange={this.handleChange} />
//                  <span className="text-danger">{emailErr}</span>
//             </div>
//           </div>
//           <div className='col md-4'>
//             <div className="mb-4">
//               <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
//               <input type="number" className="form-control" name='phone' id="exampleFormControlInput4" placeholder="Enter your number"
//                 onChange={this.handleChange} />
//                  <span className="text-danger">{phoneErr}</span>
//             </div>
//           </div>
//           <input
//                   type="submit"
//                   value="Submit"
//                   className="btn btn-primary" />
//             </form>      
//             </div>
          
//         </div>
//       </>
//     );
//   }
// }

// export default Forms;







// import React, { Component } from "react";
// import { FaPhoneAlt } from "react-icons/fa";

// class ContactUs extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       firstNameErr: "",
//       lastNameErr: "",
//       emailErr: "",
//       phoneErr: "",
//     };
//   }

//   // state = {
//   //   firstName : "",
//   //   lastName : "",
//   //   email : "",
//   //   phone : "",
//   // }

//   handleValidation = () => {
//     let firstNameErr = "";
//     let lastNameErr = "";
//     let emailErr = "";
//     let phoneErr = "";

//     if (this.state.firstName.length < 3) {
//       firstNameErr = "FirstName should have atleast 3 chars";      
//     }
//     if (this.state.lastName.length < 1) {
//       lastNameErr = "lastName should have atleast 1 char";
//     }
//     if (!this.state.email.includes("@")) {
//       emailErr = "Email should contain @";
//     }
//     if (this.state.phone.length != 10) {
//       phoneErr = "Phn num should have 10 number";
//     }

//     if(firstNameErr || lastNameErr || emailErr || phoneErr){
//       this.setState({firstNameErr, lastNameErr, emailErr, phoneErr})
//     }
//   }

//   handleChange = (event) => {
//     // console.log(event);
//     const { name, value } = event.target;
//     console.log(name, value);
//     this.setState({ [name]: value }); //  [name] = ["firstName"]
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.handleValidation()
//   };

//   // Form Validations
//   // FirstName = 3
//   // LastName = 1
//   // include @
//   // PhoneNumber = 10 nums

//   render() {
//     const {firstName, lastName, email, phone, firstNameErr, lastNameErr, emailErr, phoneErr} = this.state
//     return (
//       <>
//         <h2><FaPhoneAlt className="me-3"/>ContactUs</h2>
//         <div className="container px-5">
//           <div className="row">
//             <div className="col-md-4"></div>
//             <div className="col-md-4">
//               <form action="#" onSubmit={this.handleSubmit}>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="firstName"
//                     onChange={this.handleChange}
//                     value={firstName}
//                     id="exampleFormControlInput1"
//                     placeholder="Enter your firstName"
//                   />
//                   <span className="text-danger">{firstNameErr}</span>
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     onChange={this.handleChange}
//                     value={lastName}
//                     name="lastName"
//                     id="exampleFormControlInput2"
//                     placeholder="Enter your lastName"
//                   />
//                   <span className="text-danger">{lastNameErr}</span>
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     className="form-control"
//                     name="email"
//                     onChange={this.handleChange}
//                     value={email}
//                     id="exampleFormControlInput3"
//                     placeholder="Enter your mail"
//                   />
//                   <span className="text-danger">{emailErr}</span>
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="number"
//                     className="form-control"
//                     name="phone"
//                     onChange={this.handleChange}
//                     value={phone}
//                     id="exampleFormControlInput4"
//                     placeholder="Enter your phone number"
//                   />
//                   <span className="text-danger">{phoneErr}</span>
//                 </div>

//                 <input
//                   type="submit"
//                   value="Submit"
//                   className="btn btn-primary"
//                 />
//               </form>
//             </div>
//             <div className="col-md-4"></div>
//           </div>
//           <p>sdfsdfds</p>
//         </div>

        
//       </>
//     );
//   }
// }

// export default ContactUs;

import React, { Component } from 'react'

export class Forms extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Theme Switcher App! </h1>
        <p>This is the content area. The theme is currently light. </p>
         
          
        <footer>
          Copyright@ 2025 AchieversIT. All Right Reserved
        </footer>
       
      </div>
      
    )
  }
}

export default Forms
