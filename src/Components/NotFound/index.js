import React, { PureComponent } from "react";
import { Grid, Typography } from "@material-ui/core";

class NotFound extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Grid container style={{ height: `${window.innerHeight - 150}px` }}>
        <Grid>
          <Typography>Page not found</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default NotFound;
