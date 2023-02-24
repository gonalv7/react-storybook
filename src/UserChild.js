import React, { useRef } from 'react';

const UserChild = () => {
  const userChildNumberRender = useRef(0);

  console.log('Child rendered');
  userChildNumberRender.current += 1;

  return (
    <>
      <p>{'Number of user child renders:' + userChildNumberRender.current} User child</p>
    </>
  );
};

export default UserChild;
