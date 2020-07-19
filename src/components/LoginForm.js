import React, { Component } from "react";
import "../styles/LoginForm.css";
import "bootstrap/dist/css/bootstrap.css";

class LoginForm extends Component {
  
  render() {
    let value = this.props.email ? this.props.email : '';
    return (
      <div className="container mt-4">
        <div className="form-header">
          <h2>Sign In</h2>
        </div>
        <div className="form-login-container mt-5">
          <form className="col-sm-6 offset-md-3">
            <div className="form-group input-form pl-pr-4 pt-pb-2">
              <div className="input-label ml-2">Username</div>
              <input type="text" className="form-control" placeholder="Nguyen Huu Duc" value={value}/>
            </div>
            <div className="form-group input-form pl-pr-4 pt-pb-2">
              <div className="input-label ml-2">Password</div>
              <input type="password" className="form-control" id="exampleInputPassword1"  placeholder="********"/>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-success btn-lg btn-block">
                Submit
              </button>
            </div>
          </form>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" />
            <label className="form-check-label">
              Keep me signed in
            </label>
          </div>

          <div className="form-footer d-flex justify-content-center mt-3">
            <div className="forgot-username">Forgot username?</div>
            <div className="forgot-password ml-4">Forgot password?</div> 
          </div>
        
        </div>
      </div>
    );
  }
}


export default LoginForm;