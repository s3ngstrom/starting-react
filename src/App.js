import React from "react";
import styled from "@emotion/styled";
import PokemonRow from "./PokemonRow.js";
import PokemonInfo from "./PokemonInfo.js";


import "./App.css";

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
display: grid;
grid-template-columns: 70% 30%;
grid-column-gap: 1rem,
`;

const Container = styled.div`
margin: auto;
width: 800px;
padding-top: 1rem;
`

const Input = styled.div`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`


function App() {
  const [filter, filterSet] = React.useState("");
  const [pokemon, pokemonSet] = React.useState([]);
  const [selectedItem, selectedItemSet] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3000/starting-react/pokemon.json")
      .then((response) => response.json())
      .then((data) => pokemonSet(data));
  }, []);

  return (
    <Container>
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <input
            value={filter}
            onChange={(event) => filterSet(event.target.value)}
          />
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemon
                .filter((pokemon) =>
                  pokemon.name.english.toLowerCase().includes(filter)
                )
                .slice(0, 20)
                .map((pokemon) => (
                  <PokemonRow
                    pokemon={pokemon}
                    key={pokemon.id}
                    onSelect={(pokemon) => selectedItemSet(pokemon)}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </TwoColumnLayout>
    </Container>
  );
}

export default App;
