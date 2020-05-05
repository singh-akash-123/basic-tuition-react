import React, { Component } from 'react';
import ReactDom from 'react-dom';
class Register extends Component{
    render(){
        return(
           <div className="register">
               <div className="form-container">
                    <form method="GET">
                        <h1>Register here</h1>
                        <label>Name: </label><br/>
                        <input type="text" name="name" placeholder="Enter student name"/><br/>
                        <label>Parents name: </label><br/>
                        <input type="text" name="parents-name" placeholder="Enter parents name"/><br/>
                        <label>Email: </label><br/>
                        <input type="email" name="email" placeholder="e.g.: john@gmail.com"/><br/>
                        <label>Mobile Number: </label><br/>
                        <input type="mobile" name="mobile-number" placeholder="e.g.: 9321585085"/><br/>
                        <button type="submit" name="submit">Submit</button>
                    </form>
               </div>
           </div>
        );
    }
}
export default Register;