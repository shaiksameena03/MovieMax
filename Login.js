import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSignInClickHandler = (e) => {
    e.preventDefault();

    
    if (!email.trim() || !password.trim()) {
      setError('Both fields are required!');
      return;
    }

    
    setError('');
    navigate('/dashboard');
  };

  return (
    <div className="login">
      <div className="hello">
        <h1 className="text-white">Sign In</h1>
        <br />
        <form>
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          
          {error && <p className="error-message">{error}</p>}

          <button className="btn btn-danger btn-block" onClick={onSignInClickHandler}>
            Sign In
          </button>
          <br />

          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="rememberMe" />
            <label className="form-check-label text-white" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>
        </form>
        <br />

        <div className="login-form-other">
          <div className="login-signup-now">
            New to Netflix? &nbsp;
            <a className="signup-link" target="_self" href="/">
              Sign up now
            </a>
          </div>
        </div>
      </div>
      <div className="shadow"></div>
      <img className="concord-img vlv-creative" src="https://assets.nrl.com" alt="background" />
    </div>
  );
};

export default Login;