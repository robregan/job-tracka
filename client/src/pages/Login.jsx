
import Github from "../img/github.png";

const Login = () => {
  

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  
  return (
    <div className="login">
      <h1 className="loginTitle">Login with your Github Account</h1>
      <div className="wrapper">
        <div className="left">
          
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
