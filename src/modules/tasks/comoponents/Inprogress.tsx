import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Menu from "../../common/Menu";

interface IInprogress {
  text: string;
  description: string;
  completed: boolean;
}

const Inprogress = () => {
  const initialTodos = () =>
    JSON.parse(localStorage.getItem("inprogress") || "[]");
  const [inprogress, setInprogress] = useState<IInprogress[]>(initialTodos);

  useEffect(() => {
    localStorage.setItem("inprogress", JSON.stringify(inprogress));
  }, [inprogress]);

  const handleDelete = (index: number): void => {
    const newTodos: IInprogress[] = [...inprogress];
    newTodos.splice(index, 1);
    setInprogress(newTodos);
  };

  return (
    <Wrapper>
      <Title>Inprogress</Title>

      <List>
        {inprogress.map((val, index) => (
          <Item key={index}>
            <ItemTitle>
              <span>{val.text}</span>
              <Menu>
                <Ul>
                  <Li onClick={() => {}}>Completed</Li>
                  <Li onClick={() => handleDelete(index)}>Delete</Li>
                </Ul>
              </Menu>
            </ItemTitle>
            <ItemDescription>{val.description}</ItemDescription>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default Inprogress;

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
