import React from 'react';
import './Landing.css';

const Landing = () => (
  <section className="landing">
    <div className="hero-image">
      <h1 className="hero-title">Turn the music up!</h1>
    </div>


    <section className="sellingPoint">
      <div className="selling-points">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music;
          why should you have to listen to music that someone else chose?</p>
      </div>

      <div className="selling-points">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go.
          This streaming service is available on all mobile platforms.</p>
      </div>
      <div className="selling-points">
        <h2 className="point-title">Unlimited & streaming</h2>
        <p className="point-description"> There are no arbitrary limits. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>

    <div className="footer-bottom">
      <div class="footer-copyright text-center py-3">
        <div class='copyright'>© 2019 jPlayer ☕ Made with❤️by<a href="/">Allison Jin</a></div>
      </div>
      </div>
    </section>
    );
    
    export default Landing;
