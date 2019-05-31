import React from "react";
import styled from "styled-components";

const Completed = () => {
  return (
    <Wrapper>
      <Title>Completed</Title>
    </Wrapper>
  );
};

export default Completed;

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
