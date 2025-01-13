import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

// Initialer Zustand und Reducer für NumberContext
const initialNumberState = 0;
const numberReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value >= 0 ? state - action.value : state;
    case "reset":
      return initialNumberState;
    default:
      return state;
  }
};

// Kontexte erstellen
const NumberContext = createContext();

// NumberProvider-Komponente
const NumberProvider = ({ children }) => {
  const [number, dispatch] = useReducer(numberReducer, initialNumberState);

  return (
    <NumberContext.Provider value={{ number, dispatch }}>
      {children}
    </NumberContext.Provider>
  );
};

NumberProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export { NumberProvider, NumberContext };