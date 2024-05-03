import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Server from './pages/Server';
import Download from './pages/Download';
import OpenToBrowser from './pages/OpenToBrowser';
import Prices from './pages/Prices';
import Support from './pages/Support';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/server" component={Server} />
        <Route path="/download" component={Download} />
        <Route path="/OpenToBrowser" component={OpenToBrowser} />
        <Route path="/Prices" component={Prices} />
        <Route path="/Support" component={Support} />
        <Route path="/About" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;