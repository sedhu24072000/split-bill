import React, { useState } from "react";
import Main from "./components/main";
import SplitBill from "./components/splitBill";

const initialFriends = [
  {
    id: 118836,
    name: "sedhu",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
    select: false,
  },
  {
    id: 933372,
    name: "Madhavan",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
    select: false,
  },
  {
    id: 499476,
    name: "Rathna",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
    select: false,
  },
];
function App() {
  const [data, setData] = useState(initialFriends);
  const [disp2, setDisp2] = useState("none");
  const [data2, setdata2] = useState([]);
  const arr = (e) => {
    setData((initial) => [...initial, e]);
  };
  const arr2 = (datas) => {
    const crtData = data;
    const val = data.findIndex((e) => e.id === datas.id);
    crtData[val] = datas;
    setData(crtData);
  };

  const clickbtn = (e) => {
    if (disp2 === "none") {
      setDisp2("block");
      setdata2(e);
      e.select = true;
      const crtData = data;
      setData(crtData);
    }
    // if (disp2 === "block") {
    //   setDisp2("none");
    //   e.select = false;
    //   const crtData = data;
    //   setData(crtData);
    // }
  };
  return (
    <div className="app">
      <Main sendArr={data} func={arr} clicked={clickbtn} vals={disp2}></Main>
      <div style={{ display: disp2 }}>
        <SplitBill spldata={data2} func2={arr2} func3={setDisp2}></SplitBill>
      </div>
    </div>
  );
}

export default App;
