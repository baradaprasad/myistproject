/* Ant Design */
// import 'antd/dist/antd.css';

/* *************************** */
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  return (
    <div style={{ height: '100%' }}>
      <Router>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
