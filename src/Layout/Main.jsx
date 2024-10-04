import "../../assets/sass/Layout/Main.scss";
import PropTypes from "prop-types";

function Main({ children }) {
  return <div className="main">{children}</div>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
