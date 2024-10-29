"use client";

import { useEffect, useReducer } from "react";
import Placeholder from "react-bootstrap/Placeholder";
import Statement from "@/app/@core/components/Statement";
import { listTransactions } from "@/app/@core/services/transaction_service";

interface HomeState {
  loading: boolean;
  list: [] | undefined;
}

interface HomeAction {
  type: string;
  newList?: [];
}

const initialState = {
  loading: false,
  list: undefined,
};

const reducer = (state: HomeState, action: HomeAction) => {
  switch (action.type) {
    case "load":
      return { ...state, loading: true };
    case "ready":
      return { loading: false, list: action.newList };
    default:
      return state;
  }
};

export default function HomeStatement() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadTransactions = () => dispatch({ type: "load" });

  const requestTransactions = () => {
    if (state.loading === false) return;

    listTransactions().then(handleLoadedTransactions);
  };

  const handleLoadedTransactions = (requestResult: any) => {
    dispatch({ type: "ready", newList: requestResult });
  };

  useEffect(requestTransactions, [state.loading]);
  useEffect(loadTransactions, []);

  if (!state.list) {
    const placeHolderStyle = {
      height: "600px",
      borderRadius: "12px",
    };

    return (
      <>
        <Placeholder as="div" animation="wave" bg="success">
          <Placeholder xs={12} size="lg" style={placeHolderStyle} />
        </Placeholder>
      </>
    );
  }

  return <Statement loading transactions={state.list} />;
}
