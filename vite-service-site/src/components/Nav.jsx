import { Link } from 'react-router-dom';
import '../styles/components.css';
import logo from '../assets/logo.png';

function Nav() {
  return (
    <nav>
      <Link className='logo-group' to='/'>
        <img src={logo} className='logo' alt='logo' />
        <h4>Starlight Dental Clinic</h4>
      </Link>
      <div className='links-group'>
        <h6>Home</h6>
        <h6>Services</h6>
        <h6>About Us</h6>
        <h6>Contact</h6>
        <h6>
          <Link to='/booking'>
            <button>Book Appointment</button>
          </Link>
        </h6>
      </div>
    </nav>
  );
}

export default Nav;