import "./header.css";
const logo = require("../../Shares/img/logo_.png");

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img className="header-logo-img" src={logo.default} alt="logo" />
        </div>
        <div className="header-company-name">on-line shop</div>
      </header>
    </>
  );
};

export default Header;
