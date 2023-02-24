import React from 'react';

import DropdownItem from './DropdownItem';

export default {
  title: 'Design System/DropdownItem',
  component: DropdownItem
};

const Template = (args) => <DropdownItem {...args} />;

export const SmallLabel = Template.bind({});
SmallLabel.args = {
  label: 'Some small label item',
  onItemClicked: (label) => console.log('selected label', label)
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  label: 'Some really really really really long label item',
  onItemClicked: (label) => console.log('selected label', label)
};
