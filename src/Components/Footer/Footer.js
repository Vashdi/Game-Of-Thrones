import "./Footer.css";

const Footer = ({ disabled, handleOnClickShowMore }) => {
  return (
    <div>
      <div className="footer-container">
        <div
          data-testid="footer"
          className={disabled ? "more-button-disable" : "more-button-active"}
          onClick={handleOnClickShowMore}
        >
          More
        </div>
      </div>
    </div>
  );
};

export default Footer;
