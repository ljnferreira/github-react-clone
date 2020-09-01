import React, {useState, useEffect} from 'react';

import { Container } from './styles';

import api from '../../services/api';

function Profile({match}, props) {
  const [userData, setUserData] = useState();

  useEffect(() => {
    async function load(){
      const user = decodeURIComponent(match.params.user);

      const userData = await api.get(`/users/${user}`);

      setUserData(userData.data);

    }

    load();

  },[match.params.user]);

  return (
    <Container>
      <img src={userData?.avatar_url} alt={userData?.name}/>
      <h1>{userData?.name}</h1>
      <h2>{userData?.login}</h2>
    </Container>

  );
}

export default Profile;
