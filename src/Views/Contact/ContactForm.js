import React, { useState } from 'react';

const DEFAULT_FORM_INPUTS = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const ContactForm = () => {
  const [inputs, setInputs] = useState(DEFAULT_FORM_INPUTS);
  const handleInputChange = (event) => {
    event.persist()
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
  }
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
  }

  return (
    <div className="col-md-8 col-xs-12">

      <form
        className="contact-form"
        id="contact-form"
        data-toggle="validator"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div id="contact-form-result"></div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                aria-label="sender name"
                placeholder="Name"
                data-error="Please fill out this field."
                onChange={handleInputChange}
                value={inputs.name}
                required
              />
              <div className="help-block with-errors"></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                aria-label="sender email"
                data-error="Please enter a valid email address."
                placeholder="Email"
                onChange={handleInputChange}
                value={inputs.email}
                required
              />
              <div className="help-block with-errors"></div>
            </div>
          </div>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="subject"
            aria-label="email subject"
            placeholder="Subject"
            onChange={handleInputChange}
            value={inputs.subject}
            required />
          <div className="help-block with-errors"></div>
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            name="message"
            aria-label="email message"
            rows="6"
            placeholder="Message"
            onChange={handleInputChange}
            value={inputs.message}
            required
          />
          <div className="help-block with-errors"></div>
        </div>

        <div className="form-group text-center">
          <button type="submit" className="btn-material">
            Send Message
          </button>
        </div>

      </form>

    </div>
  );
}

export default ContactForm;
