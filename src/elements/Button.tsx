// import React from 'react';
// import styled from 'styled-components';

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
//   cr: string;
//   bg: string;
//   _onClick: Function;
// }

// function Button(props: Iprops) {
//   const styles = {
//     margin: props.margin,
//     width: props.w,
//     height: props.h,
//     padding: props.p,
//     border: props.border,
//     bold: props.bold,
//     background: props.bg,
//     color: props.text_color,
//     cursor: props.cr,
//   };

//   //   if (is_delete) {
//   //     return (
//   //       <React.Fragment>
//   //         <DeleteButton {...styles} onClick={_onClick}>
//   //           {text ? text : children}
//   //         </DeleteButton>
//   //       </React.Fragment>
//   //     );
//   //   }

//   //   if (is_close) {
//   //     return (
//   //       <React.Fragment>
//   //         <CloseButton {...styles} onClick={_onClick}>
//   //           {text ? text : children}
//   //         </CloseButton>
//   //       </React.Fragment>
//   //     );
//   //   }

//   return (
//     <React.Fragment>
//       <ElButton {...styles} onClick={props._onClick}>
//         {props.text ?? props.text}
//       </ElButton>
//     </React.Fragment>
//   );
// }

// Button.defaultProps = {
//   text: false,
//   children: null,
//   _onClick: () => {},
//   is_float: false,
//   margin: false,
//   width: '100%',
//   padding: '12px 0px',
//   border: false,
//   bg: false,
// };

// const ElButton = styled.button`
//   width: 342px;
//   width: ${props => props.wd};
//   height: 54px;
//   background: #5796f7;
//   background: ${props => props.bg};
//   color: white;
//   color: ${props => props.color};
//   font-weight: bold;
//   padding: ${props => props.padding};
//   box-sizing: border-box;
//   border: none;
//   border: ${props => props.br};
//   border-radius: 5px;
//   ${props => (props.margin ? `margin: ${props.margin};` : '')}
//   ${props => (props.right ? `float: right` : '')}
//   ${props => (props.cursor ? `cursor: pointer` : '')}
// `;

// const DeleteButton = styled.button`
//   width: 57px;
//   height: 32px;
//   background-color: #fff;
//   box-sizing: border-box;
//   font-size: 16px;
//   font-weight: 800;
//   position: fixed;
//   top: 25px;
//   left: 320px;
//   text-align: center;
//   border: none;
//   ${props => (props.cursor ? `cursor: pointer` : '')}
// `;

// const CloseButton = styled.button`
//   width: auto;
//   height: 22px;
//   background-color: #fff;
//   box-sizing: border-box;
//   font-size: 16px;
//   text-align: center;
//   border: none;
//   ${props => (props.margin ? `margin: ${props.margin};` : '')};
//   border-right: ${props => props.border_right};
//   ${props => (props.cursor ? `cursor: pointer` : '')}
// `;

// export default Button;
