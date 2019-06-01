import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TasksContainer from "../tasks/containers/TasksContainer";
import { StoreProvider } from "../../store";

const App: React.FC = (): JSX.Element => {
  return (
    <StoreProvider>
      <Header>
        <TasksContainer />
      </Header>
      <Footer />
    </StoreProvider>
  );
};

export default App;
