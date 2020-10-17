import PropTypes from "prop-types";
import {GameTypes} from "../../const";

export default PropTypes.shape({
  answers: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  })),
  type: PropTypes.oneOf([GameTypes.ARTIST, GameTypes.GENRE]).isRequired,
  genre: PropTypes.string.isRequired,
});
