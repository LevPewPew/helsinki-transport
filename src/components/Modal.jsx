import React from 'react';

const Modal = ({ children, isDisplayed }) => (
  <div style={{display: isDisplayed ? 'initial' : 'none'}}>
    {children}
  </div>
);

export default Modal;
