import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';
import DropdownItem from './DropdownItem';

const Dropdown = ({ options, selectLabel = 'Select a value', onItemSelected }) => {
  const [selectedValue, setSelectedValue] = useState(selectLabel);
  const [expanded, setExpanded] = useState(false);
  const dropdownNumberRender = useRef(0);

  const onItemClickedHandler = (label) => {
    onItemSelected(label);
    setSelectedValue(label);
    setExpanded(false);
  };

  useEffect(() => {
    setSelectedValue(selectLabel);
    setExpanded(false);
  }, [selectLabel]);

  dropdownNumberRender.current += 1;

  return (
    <>
      {'number of renders ' + dropdownNumberRender.current}
      <div className="dropdown">
        <div onClick={() => setExpanded(true)}>{selectedValue}</div>
        {expanded && (
          <div className="dropdown__item-container">
            {options.map((option, i) => (
              <DropdownItem
                key={i}
                label={option}
                containerClassName={'dropdown__item'}
                onItemClicked={onItemClickedHandler}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array,
  selectLabel: PropTypes.string,
  onItemSelected: PropTypes.func.isRequired
};

export default Dropdown;
