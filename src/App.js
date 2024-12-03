import { useState, useEffect } from "react";
import SearchBar from "./component/SearchBar";

export default function App() {
  const [meal, setMeal] = useState(null); // State to store meal data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  /// Search bar state
  const [type, setType] = useState("");
  const [submit, setSubmit] = useState("");

  // console.log(submit);

  useEffect(() => {
    async function fetchMeal() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${submit}`
        );
        if (!response.ok) {
          throw new Error(`Typed in wrong! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.meals[0]);
        setMeal(data.meals[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMeal();
  }, [submit]);

  return (
    <>
      <Header />
      <SearchBar
        type={type}
        setType={setType}
        submit={submit}
        setSubmit={setSubmit}
      />

      <div className="menu-container">
        <MainSection
          header={"Focaccia"}
          text={"Bread with italian olive oil and rosemary"}
          price={6}
        />
        <MainSection
          header={"Focaccia"}
          text={"Bread with italian olive oil and rosemary"}
          price={6}
        />
        <MainSection
          header={"Focaccia"}
          text={"Bread with italian olive oil and rosemary"}
          price={6}
        />
        <MainSection
          header={"Focaccia"}
          text={"Bread with italian olive oil and rosemary"}
          price={6}
        />
        <MainSection
          header={"Focaccia"}
          text={"Bread with italian olive oil and rosemary"}
          price={6}
        />
        <MainSection
          header={"Focaccia"}
          text={"Bread with italian olive oil and rosemary"}
          price={6}
        />
      </div>
      <BottomSection />
    </>
  );
}

function Header() {
  return (
    <div className="header-container">
      <h1 className="header-text">- FAST REACT PIZZA -</h1>
      <div className="header-menu">
        <h3>OUR MENU</h3>
      </div>

      <p className="header-bottom-text">
        Authentic Italian cuisine, 6 creative dishes to chooce from. All from
        our stone over, all organic, all delicious
      </p>
    </div>
  );
}

// function SearchBar() {
//   return (
//     <div>
//       <form>
//         <input type="text" placeholder="search recipe here.." />
//         <button>Search</button>
//       </form>
//     </div>
//   );
// }

function MainSection({ header, text, price }) {
  return (
    <div className="pizza-container">
      <img
        className="pizza-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_y0UJ8gUAGadziRuqwO4MWWBkxbOPNTssQ&s"
        alt="pizza-item"
      />

      <div className="pizza-text">
        <h2 className="pizza-text-header">{header}</h2>
        <p>{text}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

function BottomSection() {
  return (
    <div className="botton-section">
      <p>We're open from 12:00 to 22:00. Come visit or order online</p>
      <button className="bottom-button">Order</button>
    </div>
  );
}
