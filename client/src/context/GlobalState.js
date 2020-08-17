import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";
import axios from "axios";

const initialState = {
  transactions: [],
  error: null,
  loading: true,
  // 참고로 얘네도 pass in 하려면 하나하나 적어줘야됨
};

// official doc과 다르게 React.create말고 그냥 createContext 해도 됨
export const MyContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  async function getTransactions() {
    try {
      // 밑에 문장 깜빡함
      const res = await axios.get("/api/v1/transactions");
      dispatch({ type: "GET_TRANSACTIONS", payload: res.data.data });
    } catch (err) {
      dispatch({
        type: "ERROR_TRANSACTIONS",
        payload: err.response.data.error,
      });
    }
  }
  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({ type: "DELETE_BTN", payload: id });
    } catch (err) {
      dispatch({
        type: "ERROR_TRANSACTIONS",
        payload: err.response.data.error,
      });
    }
  }
  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/transactions", transaction, config);
      dispatch({ type: "ADD_BTN", payload: res.data.data });
    } catch (err) {
      dispatch({
        type: "ERROR_TRANSACTIONS",
        payload: err.response.data.error,
      });
    }
  }
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    //   value가 transactions:로 써지는 거면 쌍괄호임
    <MyContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
