import styled, {css} from 'styled-components';

import {
  PeopleOutline,
  Building,
  Location,
  Email,
  Link,
  Twitter
} from '../../styles/Icons';

export const Container = styled.div`
  width: 30vw;
  height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  padding: 30px;
  border-right: 1px solid var(--outline);

  color: var(--gray);
  strong{
    color: var(--text-color);
  }

`;

export const Avatar = styled.div`
  & ,img{
    width: min(225px, 25vw);
    height: min(225px, 25vw);
    border-radius: 50%;
    background: #a3a3a3;
  }

`;
export const UserInfo = styled.div`
  margin: 30px 0;
  width: 100%;

  strong{
    font-size: 2.4rem;
  }
  p{
    font-size: 2.0rem;
  }
`;
export const FollowStatus = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  p, strong{
    font-size: 1.4rem;
  }

  p{
    div{
      display: inline-block;
      margin: 3px 6px;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: var(--gray);
    }
  }

`;

const dataContent = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;

  & p{
    font-size: 1.5rem;
    font-weight: 300;
    color: var(--text-color);
  }

`;

export const Company = styled.div`
  ${dataContent};
  & p:first-child{
    padding-right: 5px;
  }
`;

export const City = styled.div`
  ${dataContent};
`;
export const Contact = styled.div`
  ${dataContent};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const iconCSS = css`
  flex-shrink: 0;
  width: 1.9rem;
  height: 1.9rem;
`;

export const FollowersIcon = styled(PeopleOutline)`
  ${iconCSS};
`;

export const CompanyIcon = styled(Building)`
  ${iconCSS};
`;

export const LocationIcon = styled(Location)`
  ${iconCSS};
`;
export const EmailIcon = styled(Email)`
  ${iconCSS};
`;
export const SiteIcon = styled(Link)`
  ${iconCSS};
`;
export const TwitterIcon = styled(Twitter)`
  ${iconCSS};
`;



