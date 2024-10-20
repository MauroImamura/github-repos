import Logo from '../assets/github-logo.png';
import {Container, LogoDiv, SearchRow} from './styles.js';
import {api} from '../services/api.js';
import {useState} from 'react';
import Input from '../components/Input/index.js';
import Button from '../components/Button/index.js';
import Repo from '../components/Repo/index.js';

function App(){
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`);
    if(data.id){
      const exists = repos.find(r => r.id === data.id);
      if(!exists){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
      }
    }
    else{
      alert('Repositório não encontrado!');
    }
  }

  const handleRemoveRepo = (id) => {
    setRepos(prev => prev.filter(r => r.id !== id))
  }

  return(
    <>
    <LogoDiv>
      <img src={Logo} height={860} alt='github-logo'/>
    </LogoDiv>
    <Container>
      <SearchRow>
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
        <Button text={'Buscar🔎'} onClick={handleSearchRepo}></Button>
      </SearchRow>
      {repos.map(repo => <Repo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
    </>
  )
}

export default App;