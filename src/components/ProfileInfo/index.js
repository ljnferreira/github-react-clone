import React from 'react';

import {
  Container,
  Avatar,
  UserInfo,
  FollowStatus,
  Company,
  City,
  Contact,
  FollowersIcon,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  SiteIcon,
  TwitterIcon
 } from './styles';

const ProfileInfo = (props) => {
  return (
    <Container>
      <Avatar>
        <img src={props.data?.avatar_url} alt="{props.data?.name}"/>
      </Avatar>
      <UserInfo>
        <strong>{props.data?.name}</strong>
        <p>{props.data?.login}</p>
      </UserInfo>
      <FollowStatus>
        <p>
          <FollowersIcon/>
          <strong> {props.data?.followers} </strong>
          Followers
          <div></div>
            <strong>{props.data?.following} </strong>
            Following
          <div></div>
        </p>
      </FollowStatus>

      <Company>
        <p><CompanyIcon/> {props.data?.company}</p>
      </Company>

      <City>
        <p><LocationIcon/> {props.data?.location}</p>
      </City>

      <Contact>
        <p><EmailIcon/> {props.data?.email ? props.data.email : 'Não disponivel'}</p>
        <p><SiteIcon/> {props.data?.blog}</p>
        <p><TwitterIcon/> @{props.data?.twitter_username}</p>
      </Contact>
    </Container>
  );
}

export default ProfileInfo;
