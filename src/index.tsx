import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { UserContext, defaultState, isLocalUser } from './utils/User';

import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import LostPassword from './pages/LostPassword';
import ComponentTest from './pages/ComponentTest';

import './reset.css';

const RootRedirector: React.FC = () => {
  const user = useContext(UserContext);
  return <Redirect to={isLocalUser(user) ? '/home' : '/login'} />;
};

const Root: React.FC = () => (
  <UserContext.Provider value={defaultState}>
    <BrowserRouter>
      <Route exact path="/" component={RootRedirector} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/lost-password" component={LostPassword} />
      <Route path="/component-test" component={ComponentTest} />
      <Route path="/main" component={Main} />
    </BrowserRouter>
  </UserContext.Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
