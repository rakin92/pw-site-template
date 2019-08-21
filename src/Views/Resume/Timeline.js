import React from 'react';


function Timeline({ label, description, list}) {
  const educations = list.map((item, index) => (
    <li key={index}>
      <div className='timeline-content'>
        <h4>{item.name}</h4>
        <span>{item.degree} - {item.year}</span>
        <p>
          {item.description}
        </p>
      </div>
    </li>
  ));

  return (
    <div className='block timeline-block'>

      <div className='section-header'>
        <h2>{label}</h2>
        <p>{description}</p>
      </div>

      <ul className='timeline'>
        {educations}
      </ul>
    </div>
  );
}

export default Timeline;
