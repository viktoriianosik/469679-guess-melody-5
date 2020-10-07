import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Login from "../login/login";
import Lose from "../lose/lose";
import QuestionArtist from "../question-artist/question-artist";
import QuestionGenre from "../question-genre/question-genre";
import ResultSuccess from "../result-success/result-success";
import GameScreen from "../game-screen/game-screen";

const App = (props) => {
  const {errorsCount, questions} = props;
  const [firstQuestion, secondQuestion] = questions;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <WelcomeScreen
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={errorsCount}
            />
          )}
        />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/lose">
          <Lose />
        </Route>
        <Route exact path="/result">
          <ResultSuccess />
        </Route>
        <Route exact path="/dev-artist">
          <QuestionArtist
            question={secondQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenre
            question={firstQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/game">
          <GameScreen
            questions={questions}
            errorsCount = {errorsCount}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
