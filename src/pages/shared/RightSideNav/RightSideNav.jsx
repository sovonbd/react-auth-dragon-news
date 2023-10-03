import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="space-y-2">
        <h2 className="text-3xl py-4 mb-3">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>
      <div>
        <h2 className="text-3xl py-4 my-3">Find Us On</h2>
        <a
          className="flex items-center gap-3 text-lg rounded-md border rounded-b-none p-3"
          href="">
          <FaFacebook></FaFacebook> Facebook
        </a>
        <a
          className="flex items-center gap-3 text-lg  border border-y-0 p-3"
          href="">
          <FaTwitter></FaTwitter> Twitter
        </a>
        <a
          className="flex items-center gap-3 text-lg rounded-md border rounded-t-none p-3"
          href="">
          <FaInstagram></FaInstagram> Instagram
        </a>
      </div>

      {/* q zone */}
      <div className="bg-[#F3F3F3] p-1 my-4 rounded-md">
        <h2 className="text-3xl py-4 my-3">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
