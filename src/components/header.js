import React from 'react';
import styled from 'react-emotion';
import logo from '../assets/logo.jpg';

// Using javascript objects
const Wrapper = styled.div({
  padding: 0,
  margin: 0,
  color: 'white',
});

const Logo = styled.div({
  width: 60,
  height: 69,
  background: 'black',
  float: 'left',
  padding: 0,
  margin: 0,
});

// With tagged template literals (writing plain css)
const Menu = styled.nav`
  margin-top: 8px;
  background-color: red;
`;

const Header = () => (
  <Wrapper>
    <Logo>
      <img src={logo} />
    </Logo>
    <Menu>
      <a href="/home">Home</a>
    </Menu>
  </Wrapper>
);

export default Header;
