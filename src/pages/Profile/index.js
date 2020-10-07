import React, {useState, useEffect} from 'react';

import { Container } from './styles';
import ProfileInfo from '../../components/ProfileInfo';

import api from '../../services/api';

function Profile({match}, props) {
  const [userData, setUserData] = useState();

  useEffect(() => {
    async function load(){
      const user = decodeURIComponent(match.params.user);

      const userInfo = await api.get(`/users/${user}`);

      setUserData(userInfo.data);

    }

    load();

  },[match.params.user]);

  return (
    <Container>
      <ProfileInfo data={userData}/>
    </Container>

  );
}

export default Profile;
