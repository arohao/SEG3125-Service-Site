import dentalImg from "../assets/dental_logo.jpg"
import '../styles/App.css';

function Home() {
  return (
    <main>
      <a>
        <img src={dentalImg} className="frontpage-logo" alt="front page logo" />
        <h3 className="image-caption">A Healthy Smile Starts Here</h3>
      </a>

      <h3>Our Services</h3>

      <div className="services-group">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Teeth Cleaning</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">$150</h6>
            <p class="card-text">This is a routine dental procedure that removes plaque and tartar from the teeth.</p>
           
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Teeth Removal</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">$400 per tooth</h6>
            <p class="card-text">This procedure removes unwanted teeth from the mouth, whether for health or aesthetic reasons.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Root Canal</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">$800 per tooth</h6>
            <p class="card-text">This procedure is performed on a damaged or infected tooth, saving it from extraction.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">X-Rays</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Prices vary</h6>
            <p class="card-text">X-rays can be done to see what you're teeth look like, giving you a better idea of your dental health.</p>
          </div>
        </div>
      </div>
      
      
    </main>
  );
}

export default Home;