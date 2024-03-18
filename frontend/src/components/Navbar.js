import { Link } from "react-router-dom";
import Body from "./Body.png";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const logoStyle = {
  position: "absolute",
  height: "90px",
  width: "100px",
};
const hStyle = {
  fontWeight: "bold",
};
const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  return (
    <header>
      <div className="container">
        <img src={Body} alt="Builder" style={logoStyle} />
        <Link to="/">
          <h1>Get Ready To Burn</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span className='userAuth'>{user.email}</span>
              <button className='logoutbtn' onClick={handleClick}>Logout</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login" className='lgbtn' style={hStyle}>
                Login
              </Link>
              <Link to="/signup" className='lgbtn' style={hStyle}>
                Signup
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
