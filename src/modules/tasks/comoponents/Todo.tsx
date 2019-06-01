import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Menu from "../../common/Menu";
import Modal from "../../common/Modal";
import { Store } from "../../../store";

interface ITodo {
  text: string;
  description: string;
  completed: boolean;
}

const Todo = () => {
  const { todos } = useContext(Store);
  const initialTodos = () => JSON.parse(localStorage.getItem("tasks") || "[]");
  const initialInprogress = () =>
    JSON.parse(localStorage.getItem("inprogress") || "[]");
  const [todo, setTodo] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [stateTodos, setStateTodos] = useState<ITodo[]>(todos);
  const [inProgress, setInProgress] = useState<ITodo[]>(initialInprogress);
  const [isIndex, setIsIndex] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
    localStorage.setItem("inprogress", JSON.stringify(inProgress));
  }, [todos, inProgress]);

  const hanldeModal = (): void => {
    setIsModal(!isModal);
  };

  const handleTodo = (): void => {
    handleAddTodo(todo, description);
    setTodo("");
    setDescription("");
    hanldeModal();
  };

  const handleAddTodo = (text: string, description: string): void => {
    if (isEdit) {
      const newTodos: ITodo[] = [...todos];
      newTodos[isIndex] = { text, description, completed: false };
      setStateTodos(newTodos);
      setIsEdit(false);
    } else {
      const newTodos = [...todos, { text, description, completed: false }];
      setStateTodos(newTodos);
    }
  };

  const handleDeleteTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setStateTodos(newTodos);
  };

  const handleEditTodo = (val: any, index: number): void => {
    hanldeModal();
    if (val) {
      setTodo(val.text);
      setDescription(val.description);
      setIsEdit(true);
      setIsIndex(index);
    }
  };

  const hanldeInProgress = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    // const newInProgress: ITodo[] = [
    //   ...inProgress,
    //   ...newTodos.splice(index, 1)
    // ];
    newTodos.splice(index, 1);
    setStateTodos(newTodos);
    // setInProgress();

    console.log(...inProgress);
  };

  return (
    <>
      <Wrapper>
        <Title>todo</Title>

        <List>
          {todos.map((val, index) => (
            <Item key={index}>
              <ItemTitle>
                <span>{val.text}</span>
                <Menu>
                  <Ul>
                    <Li onClick={() => hanldeInProgress(index)}>Inprogress</Li>
                    <Li onClick={() => handleEditTodo(val, index)}>Edit</Li>
                    <Li onClick={() => handleDeleteTodo(index)}>Delete</Li>
                  </Ul>
                </Menu>
              </ItemTitle>
              <ItemDescription>{val.description}</ItemDescription>
            </Item>
          ))}
        </List>
        <Button onClick={hanldeModal}>Add Todo</Button>
      </Wrapper>

      {isModal && (
        <Modal
          isActive={isModal}
          toggle={hanldeModal}
          headerTitle="Todo form"
          renderFooter={() => (
            <div className="renderFooter">
              <div>
                <p>
                  <span className="required">*</span> is required.
                </p>
              </div>
              <div style={{ width: "20%" }}>
                {/* <Button onClick={handleTodo}>Add Todo</Button> */}
              </div>
            </div>
          )}
          renderBody={() => (
            <>
              <form className="form">
                <div className="form__group">
                  <label className="form__label is--required" htmlFor="title">
                    Title
                  </label>
                  <input
                    className="form__input"
                    type="text"
                    id="title"
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <label className="form__label" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    className="form__textarea"
                    id="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>
              </form>
            </>
          )}
        />
      )}
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
  position: relative;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  text-transform: capitalize;
`;

const List = styled.div``;

const Item = styled.div`
  margin-bottom: 1.5rem;
`;

const ItemTitle = styled.h3`
  margin-bottom: 0.3rem;
  font-size: 1.6rem;
  line-height: 2.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Button = styled.button`
  font-size: 1.6rem;
  font-weight: 700;
  background-color: #fff;
  color: #4a3fb3;
  border: 0.1rem solid #4a3fb3;
  width: 90%;
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
