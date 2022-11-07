import React from 'react';
import styled from 'styled-components';

// props 받아올 값의 type 을 선언
interface Iprops {
  text?: string;
  text_color?: string;
  w?: string;
  h?: string;
  margin?: boolean;
  p?: boolean;
  border: string;
  bold?: string;
  cr?: string;
  bg?: string;
}

const Button = (props: Iprops) => {
  const { text, text_color, w, h, margin, p, border, bold, cr, bg } = props;
  const styles = {
    margin: margin,
    width: w,
    height: h,
    padding: p,
    border: border,
    bold: bold,
    background: bg,
    color: text_color,
    cursor: cr,
  };

  return (
    <React.Fragment>
      <ElButton {...styles}>{text ?? text}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  is_float: false,
  margin: false,
  width: '100%',
  padding: '12px 0px',
  border: false,
  bg: false,
};

const ElButton = styled.button<Iprops>`
  width: 342px;
  height: 54px;
  background: #5796f7;
  color: white;
  font-weight: bold;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
`;

export default Button;
