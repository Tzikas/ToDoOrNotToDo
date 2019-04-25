import React, { useContext, useState } from "react";
import Store from "../context";
import { Header } from "./Header";
import { Motion, spring } from 'react-motion';
import { CSSTransitionGroup } from 'react-transition-group' // ES6


export default function List(props) {
  const { state, dispatch } = useContext(Store);
  //const [theme, setTheme] = useState('')
  const format = count =>
    count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`;

  const handleTouchStart = (key, pressLocation, e) => {
    this.handleMouseDown(key, pressLocation, e.touches[0]);
  };

  const invertTheme = () => {
    dispatch({ type:'INVERT'})
  }
  let header =
    state.todos.length === 0 ? (
      <h4>Yay! All todos are done! Take a rest!</h4>
    ) : (
        <Header style={props.style}>
          <span className="float-right">{format(state.todos.length)}</span>
          <button onClick={invertTheme}>Invert Theme</button>

        </Header>
      );

  const moveBG = (e) => {
    console.log(e.pageX, e.pageY)
    dispatch({type:"MOVE", payload: {x:e.pageX, y:e.pageY}})
  }

  const showTodos = () => {
    return state.todos.map(t => (
      <li key={t} className={`list-group-item`}  onClick={() => dispatch({ type: "COMPLETE", payload: t })}>
        {t}
        <i className="float-right fas fa-times"></i>
      </li>
    ))

  }
  const getColor = (div, e) => {
    //let color = window.getComputedStyle(e.target).getPropertyValue("background-color"); 
  }

  return (
    <div className="row box" style={props.style} onMouseMove={moveBG} >
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12" onMouseOver={(e) => getColor(this,e)}>
            <br></br>
            {header}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>

                {showTodos()}
              </CSSTransitionGroup>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}
