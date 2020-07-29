import React from 'react'
import '../css/common.css'
import { Link } from "react-router-dom";
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName:"",
            password:"",
            userNameValidationMsg:"",
            PassValidationMsg:""
        };
    }

    handleUserName=(e)=>{
      e.preventDefault();

      if(e.target.value==="Aynpriti"){

        this.setState({
          userName:e.target.value,
          userNameValidationMsg:""
        })
     }
     else{
       this.setState({
         userName:"",
         userNameValidationMsg:"Incorrect Username."
       })

     }
    }
    handlePassword=(e)=>{
      e.preventDefault();
        if(e.target.value==="Pass@123"){
        this.setState({
          password:e.target.value,
          PassValidationMsg:""
        })
      }
      else{
        this.setState({
          password:"",
          PassValidationMsg:"Incorrect Password."
        })
      }
    }
    render(){
      // const {userName,password}=this.state
      

      var isEnabled =
      this.state.userName === "" &&
      this.state.password === "" &&
      this.state.userNameValidationMsg !== "" &&
      this.state.PassValidationMsg !== ""
        ? this.state.userName === "" && this.state.password
        : this.state.userName !== "" &&
          this.state.password !== "" &&
          this.state.userNameValidationMsg === "" &&
          this.state.PassValidationMsg === "";

      // console.log(isEnabled)
      // console.log(this.state.userName,this.state.password)


        return(
        <div className="container ">
            <div className="row">
              <div className="col-lg-4 col-sm-4 col-md-4 col-xs-4">
                
              </div>
              <div className="col-lg-4 col-sm-4 col-md-4 col-xs-4 loginContainer">
                <center>
                  <h2 className="">Login Here</h2>
                </center>
                <div className="loginField">
                  <div style={{padding: "0 0 1%"}}>
                    <input
                      type="text"
                      className="form-control"
                      onChange={this.handleUserName}
                      placeholder="User Name *"
                      id="user_Name"
                      autoComplete="off"
                      maxLength="50"
                    />
                    <p className="validationMsg">
                      {this.state.userNameValidationMsg}
                    </p>
                  </div>
                  {/* <p className="validationMsg">
                    {this.state.UserNameValidationMsg}
                  </p> */}
                </div>
                <div className="loginField">
                  <div className="right-inner-addon">
                    <input
                      className="form-control"
                      onChange={this.handlePassword}
                      placeholder="Password *"
                      id="password"
                      type="password"
                      autoComplete="off"
                    />
                  </div>
                  <p className="validationMsg">
                    {this.state.PassValidationMsg}
                  </p>
                </div>
                <center>
                  <Link to="/webcamCapture">
                  <button
                    type="button"
                    disabled={!isEnabled}
                    className="btn LoginBtn font-weight-bolder"
                    onClick={this.handleLogin}
                  >
                    Login
                  </button>
                  </Link>
                </center>
              </div>
            
          </div>
        </div>
      
        )
    }
}


export default Login;