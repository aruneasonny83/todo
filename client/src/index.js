import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// import SignIn from './components/auth/SignIn';
// import SignUp from './components/auth/SignUp';
// import AuthDetails from './components/AuthDetails';
// import Home from './components/Home';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
  // <Router>
  //   {/* <SignIn /> */}
  //     {/* <SignUp /> */}
  //     {/* <AuthDetails /> */}
  //     {/* <Home/> */}
    
  //     </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
