import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Login from "../login/login";
import Lose from "../lose/lose";
import ResultSuccess from "../result-success/result-success";
import GameScreen from "../game-screen/game-screen";
import {MAX_MISTAKE_COUNT} from "../../const";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <WelcomeScreen
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={MAX_MISTAKE_COUNT}
            />
          )}
        />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route
          exact
          path="/lose"
          render={({history}) => (
            <Lose
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route
          exact
          path="/result"
          render={({history}) => (
            <ResultSuccess
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact path="/game">
          <GameScreen
            errorsCount = {MAX_MISTAKE_COUNT}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
