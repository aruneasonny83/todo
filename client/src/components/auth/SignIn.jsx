import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import '../css/signin.css'; 

const SignIn = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(""); // Added emailError state

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signIn} className="sign-in-form">
        <h1>Log In to Your Account</h1>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (!validateEmail(e.target.value)) {
                setEmailError("Invalid email format");
              } else {
                setEmailError("");
              }
            }}
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SignIn;
