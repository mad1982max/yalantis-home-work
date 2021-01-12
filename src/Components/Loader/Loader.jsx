import "Components/Loader/loader.css";

const Loader = () => (
  <div className="loader-wrapper">
    <div className="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className="loader-text">Loading...</div>
  </div>
);

export default Loader;
