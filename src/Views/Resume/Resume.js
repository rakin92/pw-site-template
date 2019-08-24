import React from 'react';
import Timeline from './Timeline';
import Testimonials from './Testimonial'

import './Resume.scss';

const EDUCATIONS = [
  { name: 'CSS College', degree: 'Masters', year: '2014 to 2016', description: 'Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed.' },
  { name: 'CSS College', degree: 'Masters', year: '2014 to 2016', description: 'Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed.' },
  { name: 'CSS College', degree: 'Masters', year: '2014 to 2016', description: 'Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed.' }
];

const EXPERIENCES = [
  { name: 'CSS College', degree: 'Masters', year: '2014 to 2016', description: 'Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed.' },
  { name: 'CSS College', degree: 'Masters', year: '2014 to 2016', description: 'Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed.' },
  { name: 'CSS College', degree: 'Masters', year: '2014 to 2016', description: 'Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed.' },
];

const TESTIMONIALS = [
  { message: 'Cu illud lorem putent vel. Eum in movet nostrum referrentur. His ne tantas tractatos. Sit eu saperet anti opam scripserit. Ei albucius conse quuntur sea, no nominavi fabellas phaedrum his. Ei albucius consequ untur sea, no nominavi fabellas phaedrum his.', name: 'John Doe', title: 'CEO Google' }
];

function Resume() {
  return (
    <section id='resume' className='section resume-section active'>
      <div className='container-fluid'>

        <Timeline label="Education" description="Take a look at the places where I've studied" list={EDUCATIONS}/>
        <br /><br />
        <Timeline label="Experience" description="Take a look at the places where I've worked" list={EXPERIENCES} />
        <Testimonials label="Testimonial" description="Take a look at what other people say about me" list={TESTIMONIALS} />

      </div>
    </section>
  );
}

export default Resume;
