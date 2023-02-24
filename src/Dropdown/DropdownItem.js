import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './DropdownItem.css';

const DropdownItem = ({ label, onItemClicked }) => {
  const dropdownItemNumberRender = useRef(0);

  dropdownItemNumberRender.current += 1;

  return (
    <div className="dropdown-item" onClick={() => onItemClicked(label)}>
      {label}
      {' - number of renders ' + dropdownItemNumberRender.current}
    </div>
  );
};

DropdownItem.propTypes = {
  label: PropTypes.string,
  onItemClicked: PropTypes.func.isRequired
};

export default DropdownItem;
