import React, { useRef } from 'react';

import './App.css';
import Dropdown from './Dropdown/Dropdown';
// import User from './User';

const App = () => {
  // const [userId, setUserId] = useState('1');
  const appNumberRender = useRef(0);

  const options = [
    'Apple',
    'Banana',
    'Peach',
    'Lemon',
    'Strawberries',
    'Orange',
    'Lime',
    'Grapefruit',
    'Blackberries',
    'Pomegranate'
  ];

  console.log('App rendered');
  appNumberRender.current += 1;

  return (
    <>
      <p>{'Number of app renders:' + appNumberRender.current}</p>
      {/* <select value={userId} onChange={e => setUserId(e.target.value)}>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <User userId={userId} /> */}
      <Dropdown
        options={options}
        onItemSelected={(label) => console.log('selected label', label)}
      />
    </>
  );
};

export default App;
