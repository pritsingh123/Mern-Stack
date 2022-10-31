
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import User from './user/pages/Users';
const App = () => {
  return <Router>
    <Route path="/">
      <User />
    </Route>
    <Redirect to="/" />
  </Router>
}

export default App;
