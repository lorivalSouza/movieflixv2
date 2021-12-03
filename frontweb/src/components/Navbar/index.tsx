import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
   
       <nav className="navbar main-nav">      
      <NavLink to="/admin/movies" className="nav-logo-text">        
        <h4>MOVIEFLIX</h4>
      </NavLink>
      <div className="nav-login-logout">
      
                             
                <a href="#logout">
                  SAIR
                </a>
             
           
              <Link to="/admin/auth"></Link>
              
      </div>
      </nav>
  );
};

export default Navbar;
