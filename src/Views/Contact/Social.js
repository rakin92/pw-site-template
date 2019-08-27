import React from 'react';

const Social = ({ platforms }) => {
  const socials = platforms.map((social, index) => (
    <div className="contact-info" key={index}>
      <i className={social.icon} />
      <a href={social.url} target="_blank" rel="noopener noreferrer">
        {social.text}
      </a>
    </div>
  ));

  return (
    <div className="col-md-4 col-xs-12">
      <div className="contact-info-icons">
        {socials}
      </div>

    </div>
  );
};

export default Social;