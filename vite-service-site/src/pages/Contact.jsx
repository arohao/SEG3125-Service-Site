import {useNavigate} from 'react-router-dom';
import '../styles/form.css';
import '../styles/calendar.css';

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/booking-success');
  };
  return (
    <>
      <div className='banner'></div>
      <main className='row mt-5 gap-5'>
        <div className='col-4'>
          <h1>Contact Us</h1>
          <p style={{lineHeight: '1.8', fontSize: '13pt'}}> A beautiful smile starts with a healthy mouth. A great dental experience starts at Starlight Dental Clinic.     
              Our dental team is dedicated to providing you with the exceptional service and quality dental care you deserve. Our patients benefit from our comprehensive dental services, modern technology, and appreciate our patient-centered approach. We are your partner in optimal oral health, and together, we’ll achieve your smile goals.
          </p>
        </div>
        <div className='col'>
          <form className='booking-form needs-validation' action="/booking-success" method="post" onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>Full Name</label>
              <input id='name' type='text' placeholder="Enter Your Full Name" className='form-control' required/>
            </div>
            <div>
              <label htmlFor='phone-number'>Phone Number</label>
              <input id='phone-number' type='text' placeholder="Enter Your Phone Number" className='form-control' required/>
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input id='email' type='text' placeholder="Enter Your Email" className='form-control' required/>
            </div>
            <div>
              <label>Any Additional Information</label>
              <textarea id='additional-info' className='form-control'/>
            </div>
            <div>
              <label>Preferred Method of Contact</label>
              <select id='contact-method' type='' placeholder="Choose" className='form-control' required defaultValue=''>
                <option disabled value=''>Choose</option>
                <option value='initial_exam'>Email</option>
                <option value='dental_cleaning'>Phone</option>
              </select>
            </div>
            <div>
              <input type='submit' className='submit'/>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Contact;