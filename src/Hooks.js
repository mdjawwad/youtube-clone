import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
      break;
  }
};
function Hooks() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  const Toogle = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decre=()=>{
    
    dispatch({ type: "DECREMENT" });
  }
  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={Toogle}>INCREMENT</button>

      <button onClick={decre}>DECREMENT</button>
    </div>
  );
}

export default Hooks;
