import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import App from './components/app/app';
import rootReducer from "./store/reducers/root-reducer";
import {createAPI} from "./services/api";
import {requireAuthorization} from "./store/action";
import {AuthorizationStatus} from "./const";
import thunk from 'redux-thunk';
import {fetchQuestionList, checkAuth} from "./store/api-actions";
import {composeWithDevTools} from "redux-devtools-extension";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchQuestionList());
store.dispatch(checkAuth());

ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
