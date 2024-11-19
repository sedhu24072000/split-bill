import React, { useState } from "react";
function AddFriend({ funcData }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || image === "") {
      return;
    }
    const obj = {
      name,
      image,
      balance: 0,
      id: Math.floor(100000 + Math.random() * 900000),
      select: false,
    };

    funcData(obj);
    setName("");
    setImage("");
  };
  return (
    <form className="form-add-friend " onSubmit={handleSubmit}>
      <label>👨🏾‍🤝‍👨🏼Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>🧧Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>
      <button className="button">Add</button>
    </form>
  );
}

export default AddFriend;
