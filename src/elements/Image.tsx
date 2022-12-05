import React from 'react';
import styled from 'styled-components';

// props 받아올 값의 type 을 선언
interface Iprops {
  shape: string;
  src: string;
  size: string;
  margin: string;
  position: string;
  cursor: string;
}

const Image = (props: Iprops) => {
  const { shape, src, size, margin, position, cursor } = props;

  const styles = {
    src: src,
    size: size,
    margin: margin,
    position: position,
    cursor: cursor,
    shape: shape,
  };

  if (shape === 'circle') {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === 'rectangle') {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: 'circle',
  src: '',
  size: 36,
  _onClick: () => {},
};

const ImageDefault = styled.div<Iprops>`
  size: ${props => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url('${props => props.src}');
  background-size: cover;
  position: ${props => props.position};
  ${props => (props.cursor ? `cursor: pointer` : '')}
`;

const ImageCircle = styled.div<Iprops>`
  size: ${props => props.size}px; //여러개 표기할때,
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url('${props => props.src}');
  background-size: cover;
  margin: ${props => props.margin};
  ${props => (props.cursor ? `cursor: pointer` : '')}
`;

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div<Iprops>`
  position: relative;
  padding-top: 100%; //padding (세로/가로*100)%
  overflow: hidden;
  background-image: url('${props => props.src}');
  background-size: cover;
  cursor: ${props => (props.cursor ? `cursor: pointer` : '')};
`;

export default Image;
