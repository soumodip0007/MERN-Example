import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };
  return (
    <div className="form-container">
      <form className="signup" onSubmit={handleSubmit}>
        <h3 className="signuph3">Sign up</h3>

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
        <button disabled={isLoading} className="signupbtn">
          Sign up
        </button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
    
  );
};

export default Signup;
