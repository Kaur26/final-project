
import 'file?name=[name].[ext]!../index.html';
import 'file?name=[name].[ext]!../css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory,hashHistory, Route, Router, IndexRoute}= require('react-router');

import AboutComponent from './components/AboutComponent.jsx';
import HomeComponent from './components/HomeComponent.jsx';
import ContactComponent from './components/ContactComponent.jsx';
import NavBarComponent from './components/NavBarComponent.jsx';
import LoginComponent from './components/LoginComponent.jsx';



class MainComponent extends React.Component{

render(){
  console.log("inside main jsx");
return (<div>
        <NavBarComponent />
        <br/><br/><br/><br/>
        {this.props.children}
</div>
)
}
}


ReactDOM.render(
  <Router history={hashHistory}>

   <Route path="/" component={MainComponent}>
   <IndexRoute component={HomeComponent}/>
   <Route path="/home" component={HomeComponent}/>
   <Route path="/about" component={AboutComponent}/>
   <Route path="/contact" component={ContactComponent}/>
   <Route path="/Login" component={LoginComponent}/>
   </Route>


</Router>,document.getElementById('content'));
