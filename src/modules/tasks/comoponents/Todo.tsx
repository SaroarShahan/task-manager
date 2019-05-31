import React from "react";
import styled from "styled-components";
import Menu from "../../common/Menu";

const Todo = () => {
  return (
    <Wrapper>
      <Title>todo</Title>

      <List>
        <Item>
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
        </Item>
        <Item>
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
        </Item>
        <Item>
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
        </Item>
      </List>
    </Wrapper>
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
