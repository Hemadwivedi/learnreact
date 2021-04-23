import React, {Component} from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div>
            <header>
            <div className='navbarall'>AtoZ</div>
            <div className='navbarall'>
            <Link to="/home">
            <span className="navlinks">Home</span>
             </Link>
             <Link to="/about">
             <span className="navlinks">About</span>
         </Link>
         <Link to="/signUp">
         <span className="navlinks">SignUp</span>
     </Link>
     <Link to="/logIn">
     <span className="navlinks">LogIn</span>
 </Link>
 <Link to="/Profile">
 <span className="navlinks">Profile</span>
</Link>
            </div>
            </header>
            </div>
        )
    }

}
export default Navbar;