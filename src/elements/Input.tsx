// import React from 'react';
// import styled from 'styled-components';
// import { Text } from './Index';

// // props 받아올 값의 type 을 선언
// interface Iprops {
//   text: string;
//   text_color: string;
//   w: string;
//   h: string;
//   margin: string;
//   p: string;
//   border: string;
//   bold: string;
//   cursor: string;
//   bg: string;
//   size: string;
// }

// const Input = (props: Iprops) => {
//   const {
//     text,
//     text_color,
//     w,
//     h,
//     margin,
//     p,
//     border,
//     bold,
//     cursor,
//     bg,
//     multiLine,
//     size,
//   } = props;

//   const styles = {
//     text: text,
//     text_color: text_color,
//     width: w,
//     height: h,
//     margin: margin,
//     padding: p,
//     border: border,
//     bold: bold,
//     background: bg,
//     color: text_color,
//     cursor: cursor,
//     multiLine: multiLine,
//     size: size,
//   };

//   if (multiLine) {
//     return (
//       <React.Fragment>
//         {text && <Text margin="0px">{text}</Text>}
//         <ElTextarea {...styles} rows={10}></ElTextarea>
//       </React.Fragment>
//     );
//   }

//   return (
//     <React.Fragment>
//       {text && <Text margin="0px">{text}</Text>}
//       <ElInput {...styles} />
//     </React.Fragment>
//   );
// };

// Input.defaultProps = {
//   width: '390px',
//   multiLine: false,
//   label: false,
//   placeholder: '텍스트를 입력해주세요.',
//   type: 'text',
//   value: '',
//   bold: false,
//   margin: false,
//   maxLength: '10',
//   background: '#F1F1F5',
// };

// const ElTextarea = styled.textarea<Iprops>`
//   border: none;
//   border-radius: 5px;
//   background: ${props => props.bg};
//   max-width: 420px;
//   min-width: 330px;
//   width: 340px;
//   height: ${props => props.h};
//   padding: 12px 10px;
//   box-sizing: border-box;
//   font-size: ${props => props.size};
//   font-weight: ${props => props.bold};
//   resize: none;
// `;

// //기본 Input
// const ElInput = styled.input<Iprops>`
//   border: none;
//   border-radius: 5px;
//   background: #f1f1f5;
//   width: 340px;
//   height: ${props => props.h};
//   padding: 12px 10px;
//   box-sizing: border-box;
//   font-size: ${props => props.size};
//   font-weight: ${props => props.bold};
//   margin: ${props => props.margin};
// `;

// export default Input;
