import React, { useContext, useEffect } from "react";
import { Transaction } from "./Transaction";
import { MyContext } from "../context/GlobalState";
export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(MyContext);
  useEffect(() => getTransactions(), []);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {/* 뭐 여기 밑에다가 각 요소 해도 되지만 얘는 Transaction 파일 따로 만듦 + 여기 transaction pass in */}
        {transactions.map((transaction) => (
          <Transaction key={transaction.key} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
