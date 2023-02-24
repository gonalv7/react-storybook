import React from 'react';

import Dropdown from './Dropdown';

export default {
  title: 'Design System/Dropdown',
  component: Dropdown
};

const Template = (args) => <Dropdown {...args} />;

export const ThreeOptions = Template.bind({});
ThreeOptions.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  onItemSelected: (label) => console.log('selected label', label)
};

export const SevenOptions = Template.bind({});
SevenOptions.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7'],
  onItemSelected: (label) => console.log('selected label', label)
};

export const CustomSelectLabel = Template.bind({});
CustomSelectLabel.args = {
  options: ['Option 1', 'Option 2'],
  onItemSelected: (label) => console.log('selected label', label),
  selectLabel: 'Pick from the list'
};
