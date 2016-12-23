import React from 'react';
import {browserHistory} from 'react-router';


export default class LoginComponent extends React.Component{
constructor(){
    super();
  this.state={
    "firstname":"default",
    "lastname":"default",
    "username":"default",
    "password":"default"
  }
}
first(efirst){
this.setState({"firstname":efirst.target.value});
console.log(this.state.firstname);
}
last(elast){
this.setState({lastname:elast.target.value});
console.log(this.state.lastname);
}
user(euser){
this.setState({"username":euser.target.value});
console.log(this.state.username);
}
pass(epass){
this.setState({password:epass.target.value});
}

check(){
  console.log("check login");
var login={
  "firstname":this.refs.first.value,
  "lastname":this.refs.last.value,
  "username":this.refs.user.value,
  "password":this.refs.pass.value,
          }
  console.log("login clicked");
  console.log(login);
  $.ajax({
    url:"/user/login",
    type: 'POST',
    data : login,
    success: function(data)
    {
      console.log("inside success");
      alert("Login Successful");


    },
    error: function(err)
    {
      console.log("error");
      alert("username or password incorrect")

    }
         });
    }

render(){
return (
<div className="loginContainer">
  <section id="logincontent">
    <form action="">
      <h1>Sign in...</h1>
      <div>
        <input type="text" ref="first" placeholder="firstname" required="" id="firstname" />
      </div>
      <div>
        <input type="text" ref="last" placeholder="lastname" required="" id="lastname" />
      </div>
      <div>
        <input type="text" ref="user" placeholder="Username" required="" id="username" />
      </div>
      <div>
        <input type="password" ref="pass" placeholder="Password" required="" id="password" />
      </div>
      <div>
        <input type="submit" onClick={this.check.bind(this)}value="Log in" />

        <a href="#">Register</a>
      </div>
    </form>

  </section>
</div>


   )
   }
}
