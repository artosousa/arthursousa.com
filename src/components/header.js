import React from 'react';
import styled from 'react-emotion';

// Using javascript objects
const Wrapper = styled.div({
  padding: 16,
  background: 'grey',
  color: 'white',
});

// With tagged template literals (writing plain css)
const Menu = styled.nav`
  margin-top: 8px;
  background-color: red;
`;

const Header = () => (
  <Wrapper>
    <h1>Mycros</h1>
    <Menu>
      <a href="/home">Home</a>
    </Menu>
  </Wrapper>
);

export default Header;
