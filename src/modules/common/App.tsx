import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TasksContainer from "../tasks/containers/TasksContainer";

const App: React.FC = () => {
  return (
    <>
      <Header>
        <TasksContainer />
      </Header>
      <Footer />
    </>
  );
};

export default App;
