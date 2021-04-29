import './App.css';

import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Pages from './Pages';

const Wrapper = styled.div`
  height: 100vh;
  overflow-y: scroll;
`;

export default function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pages/:id" component={Pages} />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}
