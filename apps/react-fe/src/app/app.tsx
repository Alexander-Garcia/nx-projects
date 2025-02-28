import { useEffect } from 'react';
import styled from 'styled-components';
import api from '../api';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const fetchUsers = async () => {
    const res = await api.get('/users');
    console.log(res);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <StyledApp>hello world</StyledApp>;
}

export default App;
