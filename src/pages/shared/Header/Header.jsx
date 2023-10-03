import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div>
      <h2 className="text-3xl text-center py-12 space-y-4">
        <img className="mx-auto" src={logo} alt="" />
        <p className="text-lg">Journalism Without Fear or Favour</p>
        <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
      </h2>
    </div>
  );
};

export default Header;
