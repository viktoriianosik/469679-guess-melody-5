import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Login from "../login/login";
import Lose from "../lose/lose";
import ResultSuccess from "../result-success/result-success";
import GameScreen from "../game-screen/game-screen";
import {MAX_MISTAKE_COUNT, AppRoute} from "../../const";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path={AppRoute.ROOT}
          render={({history}) => (
            <WelcomeScreen
              onPlayButtonClick={() => history.push(AppRoute.GAME)}
              errorsCount={MAX_MISTAKE_COUNT}
            />
          )}
        />
        <Route
          exact
          path={AppRoute.LOGIN}
          render={({history}) => (
            <Login
              onReplayButtonClick={() => history.push(AppRoute.GAME)}
            />
          )}
        />
        <Route
          exact
          path={AppRoute.LOSE}
          render={({history}) => (
            <Lose
              onReplayButtonClick={() => history.push(AppRoute.GAME)}
            />
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.RESULT}
          render={({history}) => (
            <ResultSuccess
              onReplayButtonClick={() => history.push(AppRoute.GAME)}
            />
          )}
        />
        <Route exact path={AppRoute.GAME}>
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
