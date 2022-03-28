import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ text }) => {
  return <button className={styles.title}>{text}</button>;
};
Button.propTypes = {
  text: PropTypes.string,
};
export default Button;
