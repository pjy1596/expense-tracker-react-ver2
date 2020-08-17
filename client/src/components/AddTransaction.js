import React, { useState, useContext } from "react";
import { MyContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addTransaction } = useContext(MyContext);

  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);
  function submitting(e) {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +number,
    };
    addTransaction(newTransaction);
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={submitting}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={number}
            placeholder="Enter amount..."
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
