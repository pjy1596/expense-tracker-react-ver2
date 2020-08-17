// export default function(){} 식으로 나가는 건데 여기서는 function 생략하고 arrow 쓴 것임
// export default 받는 입장에서는 아무 이름으로나 import 가능. 즉 얘가 다른 파일에서는 a, b, c 아무 이름이나 됨
export default (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTONS":
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case "DELETE_BTN":
      return {
        ...state,
        // 밑에 transaction이 아니고 transactions임
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case "ADD_BTN":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "ERROR_TRANSACTIONS":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
