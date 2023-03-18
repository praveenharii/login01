import React, {Component} from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
require('./App.css');



class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;






































// function App() {
  
//   return (
//     <form>
//       <div className="input-container">
//         <label>Username </label>
//         <input type="text" name="uname" required />
       
//       </div>
//       <div className="input-container">
//         <label>Password </label>
//         <input type="password" name="pass" required />
       
//       </div>
//       <div className="button-container">
//         <input type="submit" />
//       </div>
      
//     </form>
//   );
// };

// export default App;




/*{ <div className="container">
  <h2>Sign up</h2>

  <input
    type="text"
    placeholder="E-mail"
    name="email"
    onChange={this.handleInputChange}
    required
  />

  <input
    type="password"
    placeholder={"Password"}
    name="password"
    onChange={this.handleInputChange}
    required
  />
  {"" && <p className="error">{ }</p>}
  <button id="login-button" type="submit">
    Login
  </button>

  <p>Existing user</p>
  <p>Signup</p>
</div>} */