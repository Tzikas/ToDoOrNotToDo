import React, { useContext, useState } from "react";
import Store from "../context";
import styled from "styled-components";
// import bg from "./bg.png"


const AddTodo = (props) => {
  const Wrapper = styled.section`
  padding: 4em;
  fitler:invert;
  background-image: url("./download.png");
  background-size:cover;
  background-repeat: no-repeat;
  background-position: bottom;
  &:before {

  }
`;

  const { dispatch } = useContext(Store);

  // Creating a local state to have currently writing
  // todo item that will be sent to the global store.
  const [todo, setTodo] = useState("");
  const [test, setTest] = useState("");

  function handleTodoChange(e) {
    setTodo(e.target.value)
    setTest(e.target.value)
    console.log(test)
  }

  function handleTodoAdd() {
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) handleTodoAdd();
  }

  return (
    <Wrapper style={props.style}>
      <div className="row" >
        <div className="col-md-12">
          <br />
          <div className="input-group">
            <input
              className="form-control"
              value={todo}
              autoFocus={true}
              placeholder="Enter new todo"
              onKeyUp={handleSubmitForm}
              onChange={handleTodoChange}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={handleTodoAdd}>
                <i className="fas fa-plus-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

    </Wrapper>

  );
}

export default AddTodo
