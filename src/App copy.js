// import { useState, useEffect } from "react";

// export default function App() {
//   return (
//     <>
//       <Header />

//       <div className="menu-container">
//         <MainSection
//           header={"Focaccia"}
//           text={"Bread with italian olive oil and rosemary"}
//           price={6}
//         />
//         <MainSection
//           header={"Focaccia"}
//           text={"Bread with italian olive oil and rosemary"}
//           price={6}
//         />
//         <MainSection
//           header={"Focaccia"}
//           text={"Bread with italian olive oil and rosemary"}
//           price={6}
//         />
//         <MainSection
//           header={"Focaccia"}
//           text={"Bread with italian olive oil and rosemary"}
//           price={6}
//         />
//         <MainSection
//           header={"Focaccia"}
//           text={"Bread with italian olive oil and rosemary"}
//           price={6}
//         />
//         <MainSection
//           header={"Focaccia"}
//           text={"Bread with italian olive oil and rosemary"}
//           price={6}
//         />
//       </div>
//       <BottomSection />
//     </>
//   );
// }

// function Header() {
//   return (
//     <div className="header-container">
//       <h1 className="header-text">- FAST REACT PIZZA -</h1>
//       <div className="header-menu">
//         <h3>OUR MENU</h3>
//       </div>

//       <p className="header-bottom-text">
//         Authentic Italian cuisine, 6 creative dishes to chooce from. All from
//         our stone over, all organic, all delicious
//       </p>
//     </div>
//   );
// }

// function MainSection({ header, text, price }) {
//   return (
//     <div className="pizza-container">
//       <img
//         className="pizza-image"
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_y0UJ8gUAGadziRuqwO4MWWBkxbOPNTssQ&s"
//         alt="pizza-item"
//       />

//       <div className="pizza-text">
//         <h2 className="pizza-text-header">{header}</h2>
//         <p>{text}</p>
//         <p>{price}</p>
//       </div>
//     </div>
//   );
// }

// function BottomSection() {
//   return (
//     <div className="botton-section">
//       <p>We're open from 12:00 to 22:00. Come visit or order online</p>
//       <button className="bottom-button">Order</button>
//     </div>
//   );
// }
