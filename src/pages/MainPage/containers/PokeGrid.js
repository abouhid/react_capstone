import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Pokemon from "../components/Pokemon";
import styles from "../../../styles/grid.module.css";
import pokeball from "../../../images/pokeball.svg";

const PokeGrid = ({ data, filteredPokemon, page }) => {
  const pageLimit = 12;
  const filteredData =
    filteredPokemon === "All"
      ? data
      : data.filter((el) =>
          filteredPokemon.map((pokemon) => pokemon.id).includes(el.id)
        );

  return (
    <div className={styles.pokegrid} data-testid="poke-grid">
      {data ? (
        <>
          {filteredData.map((pokemon, i) =>
            Math.floor(i / pageLimit) === page - 1 ? (
              <Pokemon key={pokemon.id} data={pokemon} />
            ) : (
              <Fragment key={pokemon.id} />
            )
          )}
        </>
      ) : (
        <div className="loader-container">
          <img
            src={pokeball}
            className="loading-pokeball"
            alt="pokeball-icon"
          />
        </div>
      )}
    </div>
  );
};

PokeGrid.defaultProps = {
  data: [],
  page: 1,
};

PokeGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ data: PropTypes.string })),
  filteredPokemon: PropTypes.arrayOf(PropTypes.string).isRequired,
  page: PropTypes.number,
};

export default PokeGrid;
