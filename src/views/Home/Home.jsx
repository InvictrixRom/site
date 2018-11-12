import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Circle from 'react-circle';

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      downloadCounter: 0,
      downloads: 12335
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({downloadCounter: this.state.downloadCounter + 2})
    }, 1);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader>
                <video width="100%" height="auto" autoPlay loop style={{"border-radius": "10px"}}>
                  <source src="https://github.com/InvictrixRom/packages_apps_Settings/blob/inv-8.1/res/raw/invictrix_logo.mp4?raw=true" type="video/mp4" />
                </video>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle} style={{"text-align": "center"}}>Welcome to Invictrix ROM</h3>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card style={{height: "140%"}}>
              <img height="100%" width="auto" src="http://www.stickpng.com/assets/thumbs/580b57fbd9996e24bc43bf87.png" alt="Phone" />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card style={{margin: "0px"}}>
              <CardHeader>
                <h3 className={classes.cardTitle}>Statistics</h3>
              </CardHeader>
              <CardBody style={{"padding-top": "0px"}}>
                <Grid container>
                  <Grid item xs={4} sm={4} md={4} justify="center">
                    <p>Total Downloads</p>
                    <Circle
                      maxProgress={this.state.downloads}
                      progress={this.state.downloadCounter}
                      showPercentageSymbol={false}
                      animate={true}
                      animationDuration="1s"
                      responsive={false}
                    />
                  </Grid>
                  <Grid item xs={4} sm={4} md={4}>
                    <p>Downloads this month</p>
                    <Circle
                      maxProgress={this.state.downloads}
                      progress={this.state.downloadCounter}
                      showPercentageSymbol={false}
                      animate={true}
                      animationDuration="1s"
                      responsive={false}
                    />
                  </Grid>
                  <Grid item xs={4} sm={4} md={4}>
                    <p>Total Commits</p>
                    <Circle
                      maxProgress={this.state.downloads}
                      progress={this.state.downloadCounter}
                      showPercentageSymbol={false}
                      animate={true}
                      animationDuration="1s"
                      responsive={false}
                    />
                  </Grid>
                </Grid>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
