import '../app/App.css';
import logo from '../assets/logo.png';

function Nav() {
  return (
    <nav>
      <a className='logo-group' href='../../index.html'>
        <img src={logo} className='logo' alt='logo' />
        <h3>Starlight Dental Clinic</h3>
      </a>
      <div className='links-group'>
        <h5>Home</h5>
        <h5>Services</h5>
        <h5>About Us</h5>
        <h5>Contact</h5>
        <h5>
          <button>Book Appointment</button>
        </h5>
      </div>
    </nav>
  );
}

export default Nav;