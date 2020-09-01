import React from 'react';

import {
  Header,
  Wrapper,
  Search,
  StyledSearchIcon,
  Nav,
  StyledLink,
  Logo
} from './styles';

function NavBar() {
  return (
    <Header>

      <Wrapper>
        <Logo/>
        <Search
          type='search'
          name='query'
          placeholder='Username'
        />
        <StyledSearchIcon/>
      </Wrapper>

      <Nav>
        <ul>
          <li><StyledLink to='/'>Home</StyledLink></li>
          <li><StyledLink to='/users/ljnferreira'>Lucas</StyledLink></li>
        </ul>
      </Nav>
    </Header>

  );
}

export default NavBar;
