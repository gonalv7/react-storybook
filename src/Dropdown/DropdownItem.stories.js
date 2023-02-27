import React from 'react';

import DropdownItem from './DropdownItem';

export default {
  title: 'Design System/DropdownItem',
  component: DropdownItem,
  parameters: { controls: { exclude: 'containerClassName' } }
};

const Template = (args) => <DropdownItem {...args} />;

export const SmallLabel = Template.bind({});
SmallLabel.args = {
  label: 'Some small label item'
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  label: 'Some really really really really long label item'
};
