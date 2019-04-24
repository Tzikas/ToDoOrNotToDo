export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      // return current state if empty
      if (!action.payload) {
        return state;
      }
      // return current state if duplicate
      if (state.todos.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "COMPLETE":
      return {
        ...state,
        todos: state.todos.filter(t => t !== action.payload)
      }
    case "INVERT":
      //console.log({ type:'lunch time'})
      return {
        ...state,
        invert: !state.invert
      }
  
    default:
  return state;
}
}
