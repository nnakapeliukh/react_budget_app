import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);
const [currency, setCurrency] = useState("");
  const changeCurr = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
    setCurrency(val);
  };

  return (
    <div className="alert alert-success">
      {" "}
      {
        <select
          name="Currency"
          id="Currency"
          style={{backgroundColor: "#74cb7f", appearance: "none"}}
          onChange={(event) => changeCurr(event.target.value)}
          value={currency}
        >
          
          <option value="$">$ Dollar</option>
          <option value="£">£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
        </select>
      }
    </div>
  );
};

export default Currency;
