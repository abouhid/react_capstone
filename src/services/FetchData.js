// export function createPokeImage(pokeID) {
//   let pokeImage = document.createElement("img");
//   pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`;
//   containerDiv.append(pokeImage);
// }
/*eslint-disable */
import { useEffect, useState, useReducer } from "react";
import axios from "axios";
import dataFetchReducer from "../reducers/dataFetchReducer";

async function fetchPokemonData({ url }) {
  const res = await fetch(url);

  return await res.json();
}

const FetchData = (initialUrl, initialData = {}) => {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        let pokeData;
        const result = await axios(url);

        if (result.data.forms) {
          pokeData = result.data;
        } else {
          pokeData = await Promise.all(
            result.data.results.map((el) => fetchPokemonData(el))
          );
        }

        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: pokeData });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
};
export default FetchData;
export { fetchPokemonData };