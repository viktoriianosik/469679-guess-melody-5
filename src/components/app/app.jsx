import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Login from "../login/login";
import Lose from "../lose/lose";
import ResultSuccess from "../result-success/result-success";
import GameScreen from "../game-screen/game-screen";

const App = (props) => {
  const {errorsCount, questions} = props;

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
