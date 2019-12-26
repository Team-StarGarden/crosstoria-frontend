import React from 'react' ;
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Login from './pages/Login';
import { UserContext, defaultState } from './utils/User';

const Root: React.FC = () => {
  return (
    <UserContext.Provider value={defaultState}>
      <BrowserRouter>
        <Route exact path="/">
          <Redirect to="login" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
