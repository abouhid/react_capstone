import React, { useState } from "react";
import PropTypes from "prop-types";
import FetchData from "./services/FetchData";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [setUrl] = FetchData();
  const getNum = (url) => {
    const el = url.replace(/.*\D(?=\d)|\D+$/g, "");
    return el;
  };

  return (
    <Context.Provider
      value={{
        setUrl,
        isError,
        setIsError,
        isLoading,
        setIsLoading,
        FetchData,
        getNum,
      }}
    >
      {children}
    </Context.Provider>
  );
}
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextProvider, Context };
