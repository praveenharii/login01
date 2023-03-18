import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css"
import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
    <SignUpForm />
  </React.StrictMode>

);



ReactDOM.render(<App />, document.getElementById("root"));
