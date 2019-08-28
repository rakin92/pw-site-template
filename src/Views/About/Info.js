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
              Consul latine iudicabit eu vel. Cu has animal eru volupta tibus. Eu volumus explicari sed. Mel mutat vitupata susci piantur et, et fabellas explicari adipiscing quo. No dol em blandit theophrastus eos, nam eu per secuti repu dadae, duo hinc vide aliquip et. An has alterum nominavi. Nam at elitr veritus voluptaria. Cu eum regione tacimates vituperatoribus
            </p>
            <p>
              Consul latine iudicabit eu vel. Cu has animal eru volupta tibus. Eu volumus explicari sed. Mel mutat vitupata susci piantur et, et fabellas explicari adipiscing quo. No dol em blandit theophrastus eos, nam eu per secuti repu dadae, duo hinc vide aliquip et.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Pricing;
