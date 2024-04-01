import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch, expenses, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    const newValue = event.target.value;
    const totalExpenses = expenses.reduce((total, item) => {
      return (total = total + item.cost);
    }, 0);
    if (newValue > 20000) {
      alert(`The new value (${newValue}) cannot exceed 20000`);
      return;
    }
    if (newValue < totalExpenses) {
      alert(`The new value (${newValue}) cannot be lower than spending (${totalExpenses})`);
      return;
    }
    setNewBudget(newValue);
    dispatch({
      type: "SET_BUDGET",
      payload: newValue,
    });
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
        width={"100px"}
      ></input>
    </div>
  );
};
export default Budget;
