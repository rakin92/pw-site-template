import React from "react";

const SERVICES = [
  { label: 'Coding', description: 'I will provide, clean, effecient, documented, well tested, designed for scale codes', icon: 'ion-code-working' },
  { label: 'Design', description: 'I will provde vissualy appealing, responsive designs with mobile first design in mind', icon: 'ion-paintbrush' },
  { label: 'DevOps', description: 'I will help architect an infrastructure with top of the industry tools and best practic', icon: 'ion-settings' },
]

function Services() {

  const services = SERVICES.map((service, index) => (
    <div className="col-md-4" key={index}>

      <div className="service">
        <i className={service.icon} />
        <h4>{service.label}</h4>
        <p>
          {service.description}
        </p>
      </div>
    </div>
  ))

  return(
    <div className="block services-block">

      <div className="section-header">
        <h2>My Services</h2>
        <p>I provide amazing and high quality services</p>
      </div>

      <div className="row">
        {services}
      </div>

    </div>
  );
}

export default Services;
