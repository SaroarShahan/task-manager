import React, { Component } from "react";
import styled from "styled-components";
import Todo from "../comoponents/Todo";
import Inprogress from "../comoponents/Inprogress";
import Completed from "../comoponents/Completed";

class TasksContainer extends Component {
  render() {
    return (
      <Container>
        <Todo />
        <Inprogress />
        <Completed />
      </Container>
    );
  }
}

export default TasksContainer;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  height: 100%;
`;
