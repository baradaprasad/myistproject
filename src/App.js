/* Ant Design */
// import 'antd/dist/antd.css';

/* *************************** */
import './App.css';
import { useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Dashboard from './Components/Dashboard/Dashboard'

function PrivateRoute({ component: Comp, ...rest }) {
  const isLogin = useMemo(() => {
    const strUser = localStorage.getItem('product');
    let user = {}
    if (strUser) {
      user = JSON.parse(strUser)
    }
    if (user.email && user.password) {
      return true
    }
    return false
  }, [])
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          <Comp />
        ) : (
          <Redirect
            to={{
              pathname: "/Login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Comp, ...rest }) {
  const isLogin = useMemo(() => {
    const strUser = localStorage.getItem('product');
    let user = {}
    if (strUser) {
      user = JSON.parse(strUser)
    }
    if (user.email && user.password) {
      return true
    }
    return false
  }, [])
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isLogin ? (
          <Comp />
        ) : (
          <Redirect
            to={{
              pathname: "/Dashboard",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const HomeRoute =()=>{
  const isLogin = useMemo(() => {
    const strUser = localStorage.getItem('product');
    let user = {}
    if (strUser) {
      user = JSON.parse(strUser)
    }
    if (user.email && user.password) {
      return true
    }
    return false
  }, [])

  return <Redirect to={isLogin?"/Dashboard":"/Login"} /> 

}


function App() {
  return (
    <div style={{ height: '100%' }}>

<Router>
        <Switch>
          <Route path="/" exact component={HomeRoute }/>
          <PublicRoute path="/Login" component={Login} />
          <PublicRoute path="/Signup" component={Signup} />
          <PrivateRoute path="/Dashboard" component={Dashboard} />
          {/* <Route path="/" ></Route>
                  <Route path="/" ></Route>
                  <Route path="/" ></Route> */}
        </Switch>
      </Router>

      {/* <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Dashboard" component={Dashboard} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
