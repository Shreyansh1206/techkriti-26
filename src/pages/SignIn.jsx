import { useNavigate } from 'react-router-dom';

const SignIn = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/register');
  };

  return (
    <div className="signin-page">
      <h1>Sign In</h1>

      <button className="btn btn-primary" onClick={handleLogin}>
        Continue
      </button>
    </div>
  );
};

export default SignIn;
