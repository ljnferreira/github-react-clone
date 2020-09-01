import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import {
  Github,
  PersonSearch
} from '../../styles/Icons';

export const Header = styled.header`
  width: 100vw;
  height: 54px;
  color: var(--primary);
  background: var(--text-color);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  padding: 24px 6px;
`;

const iconCSS = css`
  flex-shrink: 0;
  width: 15px;
  height: 15px;
  color: var(--white);
`;

export const Logo = styled(Github)`
  flex-shrink: 0;
  width: 35px;
  height: 35px;
  color: var(--white);
`
export const StyledSearchIcon = styled(PersonSearch)`
  ${iconCSS};
  margin: 6px;
  margin-left: -33px;
  cursor: pointer;
`;

export const Search = styled.input`
  margin: 6px 12px;
  padding: 6px 12px;
  opacity: 0.4;
  background: var(--primary);

  border-radius: 5px;

  transition: all 0.3s ease-in-out;

  &:hover{
    opacity: 0.5;
  }

  &:focus{
    outline: none;
    opacity: 0.7;
    width: 500px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    li{
      margin: 12px 6px;
      padding: 12px 6px;
    }

  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited{
    color: var(--primary);
  }
  &:hover{
    opacity: 0.8;
  }
`

