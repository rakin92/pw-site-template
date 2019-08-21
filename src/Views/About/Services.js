import React from "react";

const SERVICES = [
  { label: 'Photography', description: 'Nam reformidans vituper atori bus at. Id nisl diceret maiestatis qui, mel affert doctus te.', icon: 'icon-basic-photo' },
  { label: 'Coding', description: 'Nam reformidans vituper atori bus at. Id nisl diceret maiestatis qui, mel affert doctus te.', icon: 'icon-basic-keyboard' },
  { label: 'WordPress', description: 'Nam reformidans vituper atori bus at. Id nisl diceret maiestatis qui, mel affert doctus te.', icon: 'icon-basic-keyboard' },
]

function Services() {

  const services = SERVICES.map((service, index) => (
    <div className="col-md-4" key={index}>

      <div className="service">
        <i className={service.icon}></i>
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
