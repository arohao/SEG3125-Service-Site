import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function Booking() {
  return (
    <main>
      <h1>Book your appointment</h1>
      <form className='booking-form'>
        <div>
          <label for='name'>Full Name</label>
          <input id='name' type='text' placeholder="Enter Your Full Name"/>
        </div>
        <div>
          <label for='phone-number'>Phone Number</label>
          <input id='phone-number' type='text' placeholder="Enter Your Phone Number"/>
        </div>
        <div>
          <label for='email'>Email</label>
          <input id='email' type='text' placeholder="Enter Your Email"/>
        </div>
        <div>
          <label for='service'>Select Service</label>
          <select id='service' type='' placeholder="Choose">
            <option disabled selected>Choose</option>
            <option>Dental Cleaning</option>
            <option>Initial Exam</option>
            <option>Teeth Removal</option>
          </select>
        </div>
        <div>
          <Calendar minDate={new Date()}/>
        </div>
      </form>
    </main>
  );
}

export default Booking;