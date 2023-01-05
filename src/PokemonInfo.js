import React from "react";
import PropTypes from "prop-types";

const PokemonInfo = ({ name, type, base }) => (
    <div>
      <h1>{name.english}</h1>
      <h3>{type.join(", ")}</h3>
      <table>
        {Object.keys(base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{base[key]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
  PokemonInfo.propTypes = {
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string.isRequired),
    base: PropTypes.shape({
      HP: PropTypes.number.isRequired,
      Attack: PropTypes.number.isRequired,
      Defense: PropTypes.number.isRequired,
      "Sp. Attack": PropTypes.number.isRequired,
      "Sp. Defense": PropTypes.number.isRequired,
      Speed: PropTypes.number.isRequired,
    }),
  };

  export default PokemonInfo