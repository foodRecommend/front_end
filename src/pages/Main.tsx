import React from 'react';
import { Button } from '../elements/Index';
import styled from 'styled-components';

const Main: React.FC = () => {
  return (
    <div>
      Mainㅁㄴㅇㄹㅁㅇㄴㄹ
      <Button text="test button" />
      <img src={require('../assets/icons/ico_map.svg').default} />
      <img src={require('../assets/icons/ico_write.svg').default} />
      <ColorTest>ddd</ColorTest>
    </div>
  );
};

export default Main;

const ColorTest = styled.div`
  color: red;
`;
