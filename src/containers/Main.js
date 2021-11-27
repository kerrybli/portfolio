import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Error404 from "../pages/errors/error404/Error";
import { Element } from "react-scroll";
import Skills from "./skills/Skills";

export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    console.log(theme);

    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route
              path="/home"
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />

            <Route
              path="*"
              render={(props) => (
                <Error404 {...props} theme={this.props.theme} />
              )}
            />


          </Switch>

        </HashRouter>


        <Element id="about" name="about">
          <Skills theme={this.props.theme} />
        </Element>
        <Element id="projects" name="projects">
          <Projects theme={this.props.theme} />


        </Element>

        <Element id="contact" name="contact">
          <Contact theme={this.props.theme} />


        </Element>

      </div>
    );

  }
}
