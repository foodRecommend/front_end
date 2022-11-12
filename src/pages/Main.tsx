import React from 'react';
import { Button } from '../elements/Index';

const Main: React.FC = () => {
  return (
    <div>
      Main
      <Button text="test button" />
      <img src={require('../assets/icons/ico_map.svg').default} />
      <img src={require('../assets/icons/ico_write.svg').default} />
    </div>
  );
};

export default Main;
