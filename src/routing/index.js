import React from "react";
import { Route, Switch } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Home from "../Components/Home";
import Login from "../Components/Login";
import { withRouter } from "react-router-dom";
const privateRoutes = [
  {
    path: "/home",
    component: Home,
    exact: true
  }
];
const publicRoutes = [
  {
    path: "/",
    component: Login,
    exact: true
  }
];
const styles = theme => ({
  topContainer: {
    marginTop: "20px"
  }
});
class Routing extends React.Component {
  componentDidMount() {
    if (window.localStorage) {
      let localData = JSON.parse(localStorage.getItem("isUser"));
      console.log(localData);
      if (localData && localData.userAuth) {
        this.props.history.push("/home");
      } else {
        this.props.history.push("/");
      }
    }
  }
  render() {
    const { classes } = this.props;
    let localData = JSON.parse(localStorage.getItem("isUser"));
    const RouteIs =
      localData && localData.userAuth && localData.userAuth
        ? privateRoutes
        : publicRoutes;
    console.log(localData, "++", RouteIs);
    return (
      <React.Fragment>
        <div className={classes.topContainer}>
          <Switch>
            {RouteIs &&
              RouteIs.map((route, index) => (
                <Route
                  key={index}
                  exact
                  path={route.path}
                  component={route.component}
                />
              ))}
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(withRouter(Routing));
