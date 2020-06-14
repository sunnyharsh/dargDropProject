import React, { PureComponent } from "react";
import { Grid, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submit = () => {
    let fakeData = { email: "sunny@gmail.com", password: "1234" };
    const { email, password } = this.state;
    if (email == fakeData.email && password == fakeData.password) {
      if (window.localStorage) {
        localStorage.setItem("isUser", JSON.stringify({ userAuth: true }));
        this.props.history.push("/home");
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: `${window.innerHeight - 150}px` }}
        >
          <Grid item sm="4">
            <Grid className="inContainer">
              <input
                onChange={this.handleChange}
                name="email"
                type="text"
                placeholder="eneter email"
              ></input>
            </Grid>
            <Grid className="inContainer">
              <input
                onChange={this.handleChange}
                name="password"
                type="text"
                placeholder="eneter email"
              ></input>
            </Grid>
            <Grid>
              <Button onClick={this.submit} className="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <style jsx="true">{`
          .inContainer {
            width: 100%;
          }
          input {
            width: 100%;
            height: 35px;
            padding: 9px;
            border-radius: 6px;
            margin-bottom: 1rem;
          }
          .submit {
            background-color: green;
            color: #fff;
          }
          .submit:hover {
            background-color: green;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withRouter(Login);
