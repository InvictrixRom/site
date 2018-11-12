import React from "react";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Grid from "@material-ui/core/Grid/Grid";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { Button } from "@material-ui/core";

class Team extends React.Component {

  constructor() {
    super()
    this.state = {
      teamJson: null
    };
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/InvictrixRom/team/inv-9.0/team.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ teamJson: result });
        },
        (error) => { }
      )
  }

  render() {
    return (
      <GridContainer>
        {this.state.teamJson != null &&
          this.state.teamJson.map((prop, key) => {
            return (
              <GridItem xs={12} sm={12} md={4} style={{"margin-bottom": "80px"}}>
                <Card profile style={{height: "100%", "margin-bottom": "0px"}}>
                  <CardAvatar profile>
                    <img
                      alt={
                        `${prop.xdaUsername}'s Profile`
                      }
                      src={
                        `https://raw.githubusercontent.com/InvictrixRom/team/inv-9.0/avatar/${prop.avatar}`
                      } />
                  </CardAvatar>
                  <CardBody profile style={{"margin-top": "0px"}}>
                    <p style={{"margin": "0px"}}>
                      <h3 style={{"margin": "0px"}}>
                        {prop.name}
                        <br />
                        <small>{prop.xdaUsername}</small>
                      </h3>
                    </p>
                    <p>
                      {prop.duties}
                    </p>
                    <div>
                      {prop.devices !== null && prop.devices[0] !== "TBD" && prop.devices[0] !== "" && (<div><hr /><h4>Devices</h4></div>)}
                      {prop.devices.map((prop, key) => {
                        if(prop !== "" && prop !== "TBD")
                          return (
                            <Grid container justify="center">
                              <Card style={{width: "50%", margin: "2px"}}>
                                <a href={`https://get.invictrixrom.com/${prop}`}>
                                  <Button style={{color: "#ccc", width: "100%"}}>
                                    {prop}
                                  </Button>
                                </a>
                              </Card>
                            </Grid>
                          )
                        else return null;
                      })}
                    </div>
                  </CardBody>
                </Card>
              </GridItem>
            )
          })
        }
      </GridContainer>
    );
  }
}

export default Team;
