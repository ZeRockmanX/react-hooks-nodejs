import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
