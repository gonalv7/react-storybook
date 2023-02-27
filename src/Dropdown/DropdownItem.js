import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './DropdownItem.css';

const DropdownItem = ({ label, color, containerClassName, onItemClicked }) => {
  const dropdownItemNumberRender = useRef(0);

  dropdownItemNumberRender.current += 1;

  let classes = 'dropdown-item';
  switch (color) {
    case 'red':
      classes += ' dropdown-item--red';
      break;
    case 'gray':
      classes += ' dropdown-item--gray';
      break;
    case 'green':
      classes += ' dropdown-item--green';
      break;
  }

  classes += containerClassName ? ` ${containerClassName}` : '';

  return (
    <div className={classes} onClick={() => onItemClicked(label)}>
      {label}
      {' - number of renders ' + dropdownItemNumberRender.current}
    </div>
  );
};

DropdownItem.propTypes = {
  label: PropTypes.string,
  color: PropTypes.oneOf(['red', 'gray', 'green']),
  containerClassName: PropTypes.string,
  onItemClicked: PropTypes.func.isRequired
};

export default DropdownItem;
