import "./Header.scss"; 
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");

  const loginClickHandler = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const signupClickHandler = (e) => {
    e.preventDefault();
    navigate('/signup');
  };

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
  };

  return (
    <header className="topNav">
      <nav className="navbar">
        <div className="navbar-left">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              className="nav__logo"
              src="https://wallpapers.com/images/featured/netflix-logo-png-fqwt81hprrz7xsfg.jpg"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="navbar-right">
          {/* Language Selector */}
          <select className="language-select" value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>

          {/* Sign-In Button */}
          <button className="btn btn-danger" onClick={loginClickHandler}>
            {language === "hi" ? "साइन इन करें" : "Sign In"}
          </button>

          {/* Sign-Up Button */}
          <button className="btn btn-warning ml-2" onClick={signupClickHandler}>
            {language === "hi" ? "साइन अप करें" : "Sign Up"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;