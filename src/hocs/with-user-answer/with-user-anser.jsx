import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {GameTypes} from "../../const";

const withUserAnswer = (Component) => {
  class WithUserAnser extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        answers: new Array(props.question.answers.length).fill(false),
      };

      this.handleAnswer = this.handleAnswer.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleAnswer() {
      const {onAnswer, question} = this.props;
      const {answers} = this.state;

      onAnswer(question, answers);
    }

    handleChange(value, i) {
      const {answers} = this.state;
      const userAnswers = answers.slice(0);
      userAnswers[i] = value;

      this.setState({
        answers: userAnswers,
      });
    }

    render() {
      const {answers} = this.state;

      return (
        <Component
          {...this.props}
          userAnswers={answers}
          onAnswer={this.handleAnswer}
          onChange={this.handleChange}
        />
      );
    }
  }

  WithUserAnser.propTypes = {
    question: PropTypes.shape({
      answers: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
      })).isRequired,
      genre: PropTypes.string.isRequired,
      type: PropTypes.oneOf([GameTypes.GENRE]).isRequired,
    }).isRequired,
    onAnswer: PropTypes.func.isRequired,
  };

  return WithUserAnser;
};

export default withUserAnswer;
