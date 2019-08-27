import React from 'react';
import Timeline from './Timeline';
import Testimonials from './Testimonial'

import './Resume.scss';

const EDUCATIONS = [
  { name: 'NYU Tandon', degree: 'B.Sc Computer Science', year: '2010 to 2014', description: 'At NYU Tandon, I studied computer science with main focus in Web Development and minor focus in computer security.' },
];

const EXPERIENCES = [
  { name: 'CommonBond', degree: 'Sr. Software Engineer', year: 'Jul 2019 - Present', description: 'Designed, developed, and deployed microservices. Build features for A/B testing.' },
  { name: 'CommonBond', degree: 'Software Engineer', year: 'Jan 2018 to Jul 2019', description: 'Developed in house lending platform for current and incoming students to take out student loan.' },
  { name: 'Revintu', degree: 'Software Engineer', year: 'Mar 2017 to Dec 2017', description: 'Built pager system for customer service. Maintained online billing and collection tools.' },
  { name: 'MedPilot', degree: 'Co-Founder', year: 'Aug 2014 to Mar 2017', description: 'Designed and Devloped UI & UX, Frotned and Backend of online medical bill repayment system.' },
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
