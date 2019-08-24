import React from 'react';

import Person from './person.png';
import './Home.scss';

function Home() {
  return (
    <section id="home" className="section main-section active">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-xs-12 img-col-main">
          <div className="person-img">
            <img src={Person} alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-xs-12 text-col-main">
          <div className="intro-text-col">
            <div className="inner">

              <div className="intro-text">

                <h1>I’m John Doe</h1>

                <span>A friend, buddy and dude from earth</span>

                <p>
                  Euismod consulatu eos eu. Vocent facilis sensibus vel ut, quo an nihil qualisque. Mea eu nulla prompta. Dicat velit at usum, malis euismod vim an
                </p>

                <div className="intro-btns">
                  <a href="#contact" className="btn-material section-toggle" data-section="contact">
                    Hire Me
                  </a>
                  <a href="#resume" className="btn-material btn-secondary">
                    Download Resume
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
