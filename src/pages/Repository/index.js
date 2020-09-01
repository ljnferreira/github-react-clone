import React, {useEffect, useState} from 'react';

import api from '../../services/api'

import { Container } from './styles';

function Repository({match}, props) {
  const [repoData, setRepoData] = useState();

  useEffect(() => {
    async function load(){
      const user = decodeURIComponent(match.params.user);
      const repository = decodeURIComponent(match.params.repo);

      const repositorioData = await api.get(`/repos/${user}/${repository}`);

      setRepoData(repositorioData.data);

    }

    load();

  },[match.params.repo, match.params.user]);

  return (
    <Container>
      <h1>Repository /{match.params.user}/{match.params.repo}</h1>
      <h2>{repoData?.name}</h2>
      <h3>{repoData?.private ? 'Privado' : 'Público'}</h3>
      <h3><a href={repoData?.html_url} target="_blank" rel="noopener noreferrer">{repoData?.html_url}</a></h3>
    </Container>

  );
}

export default Repository;
