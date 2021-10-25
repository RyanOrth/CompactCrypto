// import { produceWithPatches } from '@reduxjs/toolkit/node_modules/immer';
// import React from 'react';
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements';
// import {
//   COMPACT_VIEW,
//   DATA_VIEW,
//   GRAPH_VIEW,
//   ACCOUNT_VIEW,
// } from '../../constants/action-types';

// const Navbar = (currentPage) => {
//   if(currentPage === COMPACT_VIEW) {

//   }

//   if(currentPage === DATA_VIEW){

//   }

//   if(currentPage === GRAPH_VIEW){

//   }

//   if(currentPage === ACCOUNT_VIEW){
//     return (
//       <>
//         <Nav>
//           <Bars/>
  
//           <NavMenu>
//             <div class='dropdown'>
//               <button class='dropbtn'>View</button>
//               <div class='dropdown-content'>
//                 <NavLink to='/' activeStyle>
//                   Compact View
//                 </NavLink>
//                 <NavLink to='/data-view' activeStyle>
//                   Data View
//                 </NavLink>
//                 <NavLink to='/graph-view' activeStyle>
//                   Graph View
//                 </NavLink>
//                 <NavLink to='/account' activeStyle>
//                   Account
//                 </NavLink>
//               </div>
//             </div>
//             {/* Second Nav */}
//             {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
//           </NavMenu>
  
//           <NavBtn>
//             <NavBtnLink to='/signin'> Sign In</NavBtnLink>
//           </NavBtn>
//         </Nav>
//       </>
//     );
//   }
  
// };

// export default Navbar;