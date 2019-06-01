import React, { createContext } from "react";

interface IState {
  todos: [{ text: string; description: string; completed: boolean }];
  inProgress: object[];
  completed: object[];
}

const initState: IState = {
  todos: [{ text: "55435435", description: "", completed: false }],
  inProgress: [],
  completed: []
};

const Store = createContext<IState>(initState);

const StoreProvider = (props: any): JSX.Element => {
  return <Store.Provider value={initState}>{props.children}</Store.Provider>;
};

export { Store, StoreProvider };
