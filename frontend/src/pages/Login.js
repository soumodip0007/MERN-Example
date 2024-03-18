import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <div className="form-container">
      <form className="login" onSubmit={handleSubmit}>
        <h3 className="loginh3">Log in</h3>

        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
          value={email}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          value={password}
        />
        <button disabled={isLoading} className="loginbtn">Log in</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Login;
