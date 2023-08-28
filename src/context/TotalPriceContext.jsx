import { createContext, useContext, useReducer } from "react";

const totalPirceContext = createContext(null);

const totalPriceDispatchContext = createContext(null);

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }
    default: {
      throw Error("unknow action : " + action.type);
    }
  }
};

export function TotalPirceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <totalPirceContext.Provider value={totalPrice}>
      <totalPriceDispatchContext.Provider value={dispatch}>{children}</totalPriceDispatchContext.Provider>
    </totalPirceContext.Provider>
  );
}

export function useTotalPrice() {
  return useContext(totalPirceContext);
}

export function useTotalPriceDispatch() {
  return useContext(totalPriceDispatchContext);
}
