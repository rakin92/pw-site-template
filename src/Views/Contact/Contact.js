import React from 'react';

import './Contact.scss';

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
            
            <div className="col-md-8 col-xs-12">
              
              <form className="contact-form" id="contact-form" method="post" data-toggle="validator">
                
                <div id="contact-form-result"></div>
                
                <div className="row">
                  
                  <div className="col-md-6">
                    
                    <div className="form-group">
                      <input type="text" className="form-control" name="name" aria-label="sender name" placeholder="Name" data-error="Please fill out this field." required/>
                      <div className="help-block with-errors"></div>
                    </div>
                    
                  </div>
                  <div className="col-md-6">
                    
                    <div className="form-group">
                      <input type="email" className="form-control" name="email" aria-label="sender email" data-error="Please enter a valid email address." placeholder="Email" required/>
                      <div className="help-block with-errors"></div>
                    </div>
                    
                  </div>
                  
                </div>
                
                <div className="form-group">
                  
                  <input type="text" className="form-control" name="subject" aria-label="email subject" placeholder="Subject" required/>
                  <div className="help-block with-errors"></div>
                
                </div>
                
                <div className="form-group">
                  
                  <textarea className="form-control" placeholder="Message" aria-label="email message" name="message" rows="6" required></textarea>
                  <div className="help-block with-errors"></div>
                
                </div>
                
                <div className="form-group text-center">
                  
                  <button type="submit" className="btn-material">
                    Send Message
                  </button>
                
                </div>
                
              </form>
              
            </div>
            
            <div className="col-md-4 col-xs-12">
              <div className="contact-info-icons">

                <div className="contact-info">
                  <i className="ion-ios-location-outline"></i>
                  <p>
                    1254 Patterson Street<br />
                    Houston, TX 77025
                  </p>
                </div>

                <div className="contact-info">
                  <i className="ion-ios-telephone-outline"></i>
                  <p>
                    (+123) 713-295-4383
                  </p>
                </div>

                <div className="contact-info">
                  <i className="ion-android-globe"></i>
                  <p>
                    www.google.com
                  </p>
                </div>

              </div>

            </div>
          </div>
          
        </div>
        
      </div>
      
    </section>
  );
}

export default Contact;