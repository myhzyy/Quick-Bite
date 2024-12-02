import { useState, useEffect } from "react";

export default function App() {
  const [searchBar, setSearchBar] = useState("");
  const [savedText, setSavedText] = useState([]);
  const [pokemonList, setPokemonList] = useState([]); // Store all fetched Pokémon data

  console.log(savedText[savedText.length - 1]);
  console.log(savedText.length);

  function handleSubmit(e) {
    e.preventDefault();

    // Add the new search term (from searchBar) to the savedText state
    setSavedText((currentSaved) => [...currentSaved, { title: searchBar }]);

    setSearchBar(""); // Clear the search bar after submitting
  }

  useEffect(() => {
    if (savedText.length === 0) return; // Don't fetch if savedText is empty

    const fetchData = async () => {
      try {
        const pokemonName = savedText[savedText.length - 1].title; // Get the latest title
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );

        if (!response.ok) {
          throw new Error("Pokemon not found");
        }

        const data = await response.json();

        // Add the new Pokémon data to the pokemonList state
        setPokemonList((currentList) => [...currentList, data]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [savedText]); // Re-run the effect when savedText changes

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="pokemonName"
          placeholder="Enter Pokemon Name"
          value={searchBar}
          onChange={(e) => setSearchBar(e.target.value)}
        />
        <button>Fetch Pokemon</button>
      </form>

      {/* Render the list of fetched Pokémon */}
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.front_default}
              alt={`${pokemon.name} sprite`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
