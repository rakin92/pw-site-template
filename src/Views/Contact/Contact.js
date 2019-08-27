import React from 'react';

import Social from './Social';
import ContactForm from './ContactForm';
import './Contact.scss';

const platforms = [
  { id: 0, icon: 'ion-ios-location-outline', text: 'Greater New York Area, New York', url: 'some url' },
  { id: 1, icon: 'ion-social-instagram-outline', text: 'RAK1NONLY', url: 'https://instagram.com/rak1nonly' },
  { id: 2, icon: 'ion-ios-telephone-outline', text: '+1 (800) DONT - CALL', url: 'telephone:+180036682255' }
]

function Contact() {
  return(
    <section id="contact" className="section contact-section active">  
      <div className="container-fluid">
        
        <div className="block contact-block">
          
          <div className="section-header">
            <h2>Contact Me</h2>
            <p>You can message me to discuss on a project or just to say hi</p>
          </div>
          
          <div className="row">
            <Social platforms={platforms} />

            <ContactForm />
            
          </div>
          
        </div>
        
      </div>
      
    </section>
  );
}

export default Contact;