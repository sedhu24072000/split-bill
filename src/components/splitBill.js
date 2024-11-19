import React, { useState } from "react";
function SplitBill({ spldata, func2, func3 }) {
  const [Bill, setBill] = useState();
  const [yrExpense, setYrExpense] = useState();
  const [pay, setPay] = useState("");
  const handleSplit = (e) => {
    e.preventDefault();
    const finalBill = Bill - yrExpense;
    if (pay === "You") {
      const data = spldata;
      data.balance = finalBill;
      data.select = false;
      func2(data);
      func3("none");
      setBill("");
      setPay("select");
      setYrExpense("");
    }
    if (pay === spldata.name) {
      const data = spldata;
      data.balance = -yrExpense;
      data.select = false;
      func2(data);
      func3("none");
      setBill("");
      setPay("You");
      setYrExpense("");
    }
    console.log(pay);
    const data = spldata;
    data.select = false;
    func2(data);
    func3("none");
    setBill("");
    setPay("You");
    setYrExpense("");
  };
  return (
    <form className="form-split-bill" onSubmit={handleSplit}>
      <h2>split a bill with {spldata.name}</h2>
      <label>⭐Bill value</label>
      <input
        type="number"
        value={Bill}
        onChange={(e) => setBill(e.target.value)}
      ></input>
      <label>🧍🏽‍♂️Your expense</label>
      <input
        type="number"
        value={yrExpense}
        onChange={(e) => setYrExpense(e.target.value)}
      ></input>
      <label>👩🏼‍🤝‍🧑🏾{spldata.name} expense</label>
      <input type="number" value={Bill - yrExpense}></input>
      <label>🤑Who is paying the bill?</label>
      <select onChange={(e) => setPay(e.target.value)}>
        <option value={"You"}>You</option>
        <option value={`${spldata.name}`}>{spldata.name}</option>
      </select>
      <button className="button">Split bill</button>
      <button className="button">Close</button>
    </form>
  );
}

export default SplitBill;
