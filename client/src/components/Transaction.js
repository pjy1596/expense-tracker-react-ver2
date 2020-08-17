import React, { useContext } from "react";
import { MyContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(MyContext);

  return (
    // transactions에서 transaction 받을 때 그냥 받는 게 아니고 괄호 안에 props로 받아주거나 destructuring으로 transaction으로 받아야 함
    <>
      <li className={transaction.amount < 0 ? "plus" : "minus"}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction._id)}
        >
          x
        </button>
      </li>
    </>
  );
};
