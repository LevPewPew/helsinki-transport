import React from 'react';

const SideBarBtn = ({ handleClick, icon, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

export default SideBarBtn;
