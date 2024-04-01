import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import plusIcon from "./img/plus.png";
import minusIcon from "./img/minus.png";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <button
          style={{ backgroundColor: "#00000000", border: "none" }}
          onClick={(event) => increaseAllocation(props.name)}
        >
          <img alt="plus icon" src={plusIcon} width={"25px"} />
        </button>
      </td>
      <td>
        <button
          style={{ backgroundColor: "#00000000", border: "none" }}
          onClick={(event) => decreaseAllocation(props.name)}
        >
          <img alt="plus icon" src={minusIcon} width={"25px"} />
        </button>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
