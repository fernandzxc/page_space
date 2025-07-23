import logo from "../assets/logo/logo1.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <figure className="w-1/3 px-15">
        <img src={logo} />
      </figure>
      <hr />
      <div className="flex gap-5 w-1/2 py-5 justify-center text-white bg-blue-50/10 backdrop-blur-3xl">
        <a href="">00 HOME</a>
        <a href="">01 DESTINATION</a>
        <a href="">02 CREW</a>
        <a href="">00 TECHNOLOGY</a>
      </div>
    </div>
  );
};

export default Header;
