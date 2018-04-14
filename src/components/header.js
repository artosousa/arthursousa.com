import React from 'react';
import styled from 'react-emotion';
import logo from '../assets/logo.jpg';

// Using javascript objects
const Wrapper = styled.div({
  padding: 0,
  margin: '0px auto',
  width: 1024,
  position: 'relative',
  borderBottom: '1px solid #e9e9e9',
  minHeight: 85,
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
const Menu = styled.div({
  float: 'right',
  padding: 0,
  margin: '35px 0 0 0 ',
  color: '#000',
  textDecoration: 'none',
  fontFamily: 'sans-serif, helvetica, arial',
});

const MenuLink = styled.div({
  position: 'relative',
  display: 'inline-block',
  margin: '0 0 0 15px',
});
const Header = () => (
  <Wrapper>
    <Logo>
      <img src={logo} />
    </Logo>
    <Menu>
      <MenuLink>
        <a href="#work">work</a>
      </MenuLink>
      <MenuLink>
        <a href="#about">about</a>
      </MenuLink>
      <MenuLink>
        <a href="">#30in30</a>
      </MenuLink>
      <MenuLink>
        <a href="">GitHub</a>
      </MenuLink>
      <MenuLink>
        <a href="#contact">contact</a>
      </MenuLink>
    </Menu>
  </Wrapper>
);

export default Header;
