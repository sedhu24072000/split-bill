import React, { useState } from "react";
import AddFriend from "./addFriend";
function Main({ sendArr, func, clicked, vals }) {
  const [disp1, setDisp1] = useState("none");
  const handleDisp = () => {
    if (disp1 === "none") {
      setDisp1("block");
    }
    if (disp1 === "block") {
      setDisp1("none");
    }
  };
  return (
    <div className="sidebar">
      <ul>
        {sendArr.map((e) => (
          <li key={e.id}>
            <img src={e.image} alt="friend"></img>
            <h3>{e.name}</h3>
            <p
              className={e.balance === 0 ? "" : e.balance > 0 ? "green" : "red"}
            >
              {e.balance === 0
                ? `You and ${e.name} are even`
                : e.balance > 0
                ? `${e.name} owe you ${e.balance} rupee`
                : `You owe ${e.name} ${Math.abs(e.balance)} rupee`}
            </p>
            <button className="button" onClick={() => clicked(e)}>
              {e.select === true ? "Close" : "Select"}
            </button>
          </li>
        ))}
      </ul>
      <div style={{ display: disp1 }}>
        <AddFriend funcData={func}></AddFriend>
      </div>

      <button className="button" onClick={handleDisp}>
        {disp1 === "none" ? "Add Friend" : "close"}
      </button>
    </div>
  );
}

export default Main;
