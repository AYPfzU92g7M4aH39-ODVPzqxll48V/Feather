import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import featherImage from './images/feather.jpeg';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // Need to build a loading page maybe a package floating with wings.
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
        <div className="home-container">
            <div className="home-image">
                <img src={featherImage} alt='feather'></img>
            </div>
            <div className="login">
                <div className="login__container">
                    <input
                        type="text"
                        className="login__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                    />

                    <input
                        type="password"
                        className="login__textBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />

                    <button
                        className="login__btn"
                        onClick={() => logInWithEmailAndPassword(email, password)}
                    >
                        Login
                    </button>

                    <button className="login__btn login__google" onClick={signInWithGoogle}>
                        Login with Google
                    </button>

                    <div>
                        <Link to="/reset">Forgot Password</Link>
                    </div>

                    <div>
                        Don't have an account? <Link to="/register">Register</Link> now.
                    </div>
                </div>
            </div>
            <div> <Link to="/Dashboards/Publicdashboard/public">Public</Link> </div>
        </div>
  );
}

export default Login;
