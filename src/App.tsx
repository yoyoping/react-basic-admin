import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context/Index'
import Layout from './pages/layout/Index'

const App: React.FC = () => {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={Layout} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
