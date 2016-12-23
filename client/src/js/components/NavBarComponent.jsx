var React = require('react');
var {Link} = require('react-router');
export default class NavBarComponent extends React.Component{

render() {
  console.log("inside NavBarComponent");
 return(
 <div>
   <nav className="navbar navbar-inverse navbar-fixed-top">
     <div className="container-fluid">
       <ul className="nav navbar-nav">
           <li><Link to="/home">Home</Link></li>
           <li><Link to="/contact">Contact Us</Link></li>
           <li><Link to="/about">About Us</Link></li>
           <li><Link to="/LoginComponent">Login</Link></li>

        </ul>
      </div>
     </nav>

   </div>
 );
}
}
