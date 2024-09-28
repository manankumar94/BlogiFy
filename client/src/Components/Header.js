import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Header = () => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token"),
    username: localStorage.getItem("username"),
  });

  // Add a force update function to trigger a re-render
  const [isAuthChanged, setIsAuthChanged] = useState(false);
  
  const navigate = useNavigate(); // Initialize the navigate hook

  // Function to handle login or logout action by updating localStorage and state
  const updateAuthFromLocalStorage = () => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    if (token && username) {
      setAuth({ token, username });
    } else {
      setAuth({ token: null, username: "" });
    }
    
    // Trigger the component to re-render when authentication changes
    setIsAuthChanged((prev) => !prev);
  };

  useEffect(() => {
    // Call the function to update state from localStorage when component mounts
    updateAuthFromLocalStorage();
  }, []);

  const handleLogout = () => {
    // Clear localStorage and update the state
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    alert("Logout Successful");
    updateAuthFromLocalStorage();
    
    // Navigate to the login page after logout
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary p-2">
      <Link className="navbar-brand text-white mx-3" to="/">
        <b>BlogiFy</b>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/add-blog">
              Add Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/add-category">
              Add Category
            </Link>
          </li>
        </ul>
        <div className="d-flex">
          {auth.token ? (
            <>
              <button className="btn btn-outline-light mx-1">
                Welcome: {auth.username}
              </button>
              <button onClick={handleLogout} className="btn btn-outline-light mx-1">
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-outline-light mx-1">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-outline-light mx-1">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;


// Adding Comment to again adding to git 
