import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import UserChild from './UserChild';

const User = ({ userId }) => {
  const [clicks, setClicks] = useState(0);
  const userNumberRender = useRef(0);

  useEffect(() => {
    console.log('inside the users effect');
    setClicks(0);
    return () => console.log('unmounting...');
  }, [userId]);

  console.log('User rendered');
  userNumberRender.current += 1;

  return (
    <>
      <p>{'Number of user renders:' + userNumberRender.current}</p>
      <p>No. of clicks {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>Click Me</button>
      <UserChild />
    </>
  );
  // const [clicks, setClicks] = useState(0) // record no. of clicks for current user
  // const [prevUserId, setPrevUserId] = useState(userId) // record previous prop
  // const numberRender = useRef(0);

  // if(userId !== prevUserId) { // this means userId prop changed
  //     console.log('diff userId')
  //     setPrevUserId(userId)
  //     setClicks(0) // reset no. of clicks when user changes
  // } // component triggers a re-render at this point

  // console.log("User rendered")
  // numberRender.current += 1;

  // return (
  //     <>
  //     <p>{'Number of user renders:' + numberRender.current}</p>
  //     <p>No. of clicks {clicks}</p>
  //     <button onClick={() => setClicks(c => c+1)}>Click Me</button>
  //     <UserChild />
  //     </>
  // )
};

User.propTypes = {
  userId: PropTypes.string
};

export default User;
