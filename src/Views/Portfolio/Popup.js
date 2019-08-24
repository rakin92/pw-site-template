import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const customStyle = {
  top: '0px',
  position: 'absolute',
};

Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

Modal.setAppElement('#root');

function Popup({show, onClose, project}){
  return (
    <Modal
      className="mfp-bg my-mfp-zoom-in mfp-ready"
      isOpen={show}
      onRequestClose={onClose}
      onFocus={show}
      readonly
    >
      <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready" style={customStyle}>
        <div className="mfp-container mfp-inline-holder">
          <div className="mfp-content">
            <div id="popup-project" className="popup-box zoom-anim-dialog">

              <figure>
                <img src={project.image} alt="" />
              </figure>
              <div className="content">
                <h4>{project.title}</h4>
                <p>
                  {project.description}
                </p>
              </div>

              <button title="Close (Esc)" type="button" className="mfp-close" onClick={onClose}>×</button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;