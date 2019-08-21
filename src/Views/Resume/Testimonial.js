import React from 'react';


function Testimonials({ label, description, list}) {
  const testimonials = list.map((testimonial, index) => (
    <div className='testimonial' key={index}>

      <div className='icon'>
        <i className='ion-quote'></i>
      </div>

      <div className='content'>

        <p>
          {testimonial.message}
        </p>

        <div className='author-info'>
          <h4>{testimonial.name}</h4>
          <span>{testimonial.title}</span>
        </div>

      </div>

    </div>
  ));

  return (
    <div className='block testimonials-block'>

      <div className='section-header'>
        <h2>{label}</h2>
        <p>{description}</p>
      </div>

      <div className='testimonials-slider'>
        {testimonials}
      </div>

    </div>
  );
}

export default Testimonials;
