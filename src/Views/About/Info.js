import React from "react";

const DETAILS = [
  { key: 'Name', value: 'Rakin' },
  { key: 'Job', value: 'Software Engineer' },
  { key: 'Age', value: '27' },
  { key: 'Hometown', value: 'NYC' },
]

function Pricing() {

  const details = DETAILS.map((item, index) => (
    <li key={index}>
      <strong>{item.key}:</strong>
      <span>{item.value}</span>
    </li>
  ));

  return(
    <div className="block about-block">
          
      <div className="section-header">
        <h2>About Me</h2>
        <p>I'm a full-stack software engineer</p>
      </div>
      
      <div className="row">
        <div className="col-md-4">
          
          <ul className="info-list">
            {details}
          </ul>
          
        </div>
        <div className="col-md-8">
        
          <div className="about-text">
            <p>
              As an engineer I enjoy problem solving, working on new products and features. Building things with cutting edge technology, with effeciency, and good practices in mind. I have co-founded a compny in the past, from which I gaind a lot of experience and the understand value of time and building things fast, but with good practices in mind.
            </p>
            <p>
              When not writing code, I enjoy traveling, hiking, playing soccer or basketball, exploring new resturants and bars, and people watching.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Pricing;
