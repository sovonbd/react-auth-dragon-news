import { useContext } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("object", location);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form.get("email"));

    signIn(form.get("email"), form.get("password"))
      .then(() => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-3xl my-10 text-center">Please Login</h2>
      <form onSubmit={handleLogin} className="lg:w-1/2 md:w-3/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            name="password"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral bg-[#403F3F] normal-case">
            Login
          </button>
        </div>
      </form>
      <p className="text-center my-5">
        Donot have an account?{" "}
        <Link className="text-blue-600 font-semibold" to="/register">
          Register Now
        </Link>
      </p>
    </div>
  );
};

export default Login;
