import React, { useState } from "react";
import styled from "styled-components";
import Menu from "../../common/Menu";
import Modal from "../../common/Modal";

const Todo = () => {
  const [todo, setTodo] = useState<string>("");
  const [isModal, setIsModal] = useState<boolean>(false);
  let el = document.getElementById("modal");

  const hanldeModal = () => {
    setIsModal(true);
  };

  const hide = () => {
    setIsModal(false);
  };

  const handleTodo = () => {};

  return (
    <>
      <Wrapper>
        <Title>todo</Title>

        <List>
          {/* <Item>
          <div>
            <ItemTitle>titel</ItemTitle>
            <ItemDescription>dfasfdsaf asfd</ItemDescription>
          </div>
          <div>
            <Menu>
              <Ul>
                <Li>Inprogress</Li>
                <Li>Edit</Li>
                <Li>Delete</Li>
              </Ul>
            </Menu>
          </div>
        </Item> */}
        </List>
        <AddTodo onClick={hanldeModal}>Add Todo</AddTodo>
      </Wrapper>
    </>
  );
};

export default Todo;

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.1);
  padding: 2rem;
  flex-basis: 30%;
  border-radius: 0.3rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  text-transform: capitalize;
`;

const List = styled.div``;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  align-items: center;
`;

const ItemTitle = styled.h3`
  margin-bottom: 0.3rem;
  font-size: 1.6rem;
  line-height: 2.2rem;
`;

const ItemDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
`;

const Ul = styled.ul``;

const Li = styled.li`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  line-height: 1.6rem;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #4a3fb3;
  }
`;

const AddTodo = styled.button`
  font-size: 1.6rem;
  font-weight: 700;
  background-color: #fff;
  color: #4a3fb3;
  border: 0.1rem solid #4a3fb3;
  width: 100%;
  padding: 1.2rem 0;
  cursor: pointer;
  border-radius: 0.3rem;
  margin-top: 1.5rem;
  transition: all 0.3s ease-in-out 0s;

  &:hover {
    background-color: #4a3fb3;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;
