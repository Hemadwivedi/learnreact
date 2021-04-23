import React, {Component} from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component{
    render(){
        return(
            <div>
            <header>
            
            <div className='navbarallof'>
            <Link to="/home">
            <span className="navlinks">Easy</span>
             </Link>
             <Link to="/about">
             <span className="navlinks">Meadium</span>
         </Link>
         <Link to="/signUp">
         <span className="navlinks">Hard</span>
     </Link>
     

            </div>
            </header>
            </div>
        )
    }

}
export default Sidebar;