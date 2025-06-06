import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import BookingSuccess from './pages/BookingSuccess';
import Contact from './pages/Contact';

import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/booking-success" element={<BookingSuccess/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
