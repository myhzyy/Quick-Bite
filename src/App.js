import { useState, useEffect } from "react";
import SearchBar from "./component/SearchBar";

export default function App() {
  const [meal, setMeal] = useState(null); // State to store meal data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  /// Search bar state
  const [type, setType] = useState("");
  const [submit, setSubmit] = useState("");

  console.log(meal);

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
        // console.log(data.meals[0]);
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
      <Header meal={meal} />
      <SearchBar
        type={type}
        setType={setType}
        submit={submit}
        setSubmit={setSubmit}
      />

      <div className="menu-container">
        {submit && meal && (
          <>
            <MainSection
              header={<p>{meal?.strMeal}</p>}
              text={meal?.strIngredient1}
              price={6}
              image={meal?.strMealThumb}
            />
          </>
        )}
      </div>
      <BottomSection />
    </>
  );
}

function Header() {
  return (
    <div className="header-container">
      <h1 className="header-text">- QuickBite -</h1>
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

function MainSection({ header, text, price, image }) {
  return (
    <div className="pizza-container">
      <img className="pizza-image" src={image} alt="pizza-item" />

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
