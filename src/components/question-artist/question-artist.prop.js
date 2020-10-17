import PropTypes from "prop-types";
import {GameTypes} from "../../const";

export default PropTypes.shape({
  song: PropTypes.shape({
    src: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired
  }),
  answers: PropTypes.arrayOf(PropTypes.shape({
    artist: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })),
  type: PropTypes.oneOf([GameTypes.GENRE, GameTypes.ARTIST]).isRequired,
});
