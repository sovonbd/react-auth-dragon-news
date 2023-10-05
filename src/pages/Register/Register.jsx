import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("img");
    const email = form.get("email");
    // console.log(form.get("email"));
    const password = form.get("password");
    createUser(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Registered Sucessfully!!",
          confirmButtonColor: "#403F3F",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-3xl my-10 text-center">Please Register</h2>
      <form onSubmit={handleRegister} className="lg:w-1/2 md:w-3/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered"
            name="name"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="img"
            placeholder="Enter your photo url"
            className="input input-bordered"
            name="img"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
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
            placeholder="Enter your password"
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
            Register
          </button>
        </div>
      </form>
      <p className="text-center my-5">
        Allready have an account?{" "}
        <Link className="text-blue-600 font-semibold" to="/login">
          Login Now
        </Link>
      </p>
    </div>
  );
};

export default Register;
