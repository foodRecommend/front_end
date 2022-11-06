// import React from 'react';
// import styled from 'styled-components';

// interface Iprops {
//   text?: string;
//   w?: string;
//   h?: string;
//   m?: string;
//   p?: string;
//   border: string;
//   br: string;
//   cr?: string;
//   bg?: string;
//   children?: any;
//   shadow?: string;
// }

// const Grid = (props: Iprops) => {
//   const { w, h, p, m, bg, children, border, br, cr, shadow } = props;

//   const styles = {
//     width: w,
//     height: h,
//     margin: m,
//     padding: p,
//     bg: bg,
//     border: border,
//     borderRadius: br,
//     cursor: cr,
//     boxShadow: shadow,
//   };

//   return (
//     <React.Fragment>
//       <GridBox {...styles} onClick={_onClick}>
//         {children}
//       </GridBox>
//     </React.Fragment>
//   );
// };

// Grid.defaultProps = {
//   chidren: null,
//   width: '100%',
//   height: '100%',
//   padding: false,
//   margin: false,
//   bg: false,
//   center: false,
//   _onClick: () => {},
//   column: false,
//   row: false,
//   bottom: false,
//   right: false,
//   position: false,
//   isFlex_end: false,
// };

// const GridBox = styled.div<Iprops>`
//   width: ${props => props.w};
//   height: ${props => props.h};
//   box-sizing: border-box;
//   box-shadow: ${props => props.shadow};
//   ${props => (props.p ? `padding: ${props.p};` : '')}
//   ${props => (props.m ? `margin: ${props.m};` : '')}
//   ${props => (props.bg ? `background-color: ${props.bg};` : '')}
//   border: ${props => props.border};
//   border-radius: ${props => props.br};
//   ${props => (props.bottom ? `bottom: 0px` : '')}
//   ${props => (props.right ? `right: 0px` : '')}
//   ${props => (props.position ? `position: fixed` : '')}
//   ${props =>
//     props.isFlex_end
//       ? `display: flex; align-items: center; justify-content: end;`
//       : null}
//   ${props => (props.stop ? `overscroll-behavior: none` : '')}
//   cursor: ${props => props.cursor};
// `;

// export default Grid;
