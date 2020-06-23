import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import {
  HomePage,
  GenrePage,
  MoodPage,
  LoginPage,
  SignUpPage,
  ProfilePage,
  EditBeatPage,
  NotFoundPage
} from "pages";
import Base from "containers/common/Base";
import configure from "store/configure";

const store = configure();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/genre" component={GenrePage} />
              <Route exact path="/mood" component={MoodPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignUpPage} />
              <Route path="/profile/:userid" component={ProfilePage} />
              <Route exact path="/uploadBeat" component={EditBeatPage} />
              <Route path="/editBeat/:beatId" component={EditBeatPage} />
              <Route component={NotFoundPage} />
            </Switch>
            <Base />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
