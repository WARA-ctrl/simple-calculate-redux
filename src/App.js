import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, mulNumber, divNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const myMulState = useSelector((state) => state.multTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>
        <div className="quantity">
          <button
            className="quantity_minus"
            title="Decremant"
            onClick={() => dispatch(decNumber())}
          >
            -
          </button>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myState}
          />
          <button
            className="quantity_plus"
            title="Increment"
            onClick={() => dispatch(incNumber())}
          >
            +
          </button>
        </div>
      </div>

      <div className="container_mul">
        <h1>Multiplication/Divide counter</h1>
        <h4>using React and Redux</h4>
        <div className="quantity">
          <button
            className="quantity_minus"
            title="Divide"
            onClick={() => dispatch(divNumber())}
          >
            ÷
          </button>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myMulState}
          />
          <button
            className="quantity_plus"
            title="Multiplication"
            onClick={() => dispatch(mulNumber())}
          >
            x
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
