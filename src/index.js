import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";

import Store from "./context";
import reducer from "./reducer";
import './app.min.css'
import './index.css'

import { usePersistedContext, usePersistedReducer } from "./localStorage";

import List from "./components/List";
import AddTodo from "./components/AddTodo";



function App() {
  // create a global store to store the state
  const globalStore = usePersistedContext(useContext(Store), "state");

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" // The localStorage key
  );
  let style = {filter: `invert(${~~state.invert}`}
  let coords = state.coords || {x:0,y:0};
  return (
    // State.Provider passes the state and dispatcher to the down
    <Store.Provider  value={{ state, dispatch }}>
      <AddTodo style={style} coords={coords} />
      <List style={style}  />
    </Store.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
