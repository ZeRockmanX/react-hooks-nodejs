import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';

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
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}
