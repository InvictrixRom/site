import React from "react";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";

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
              <GridItem xs={12} sm={12} md={4}>
                <Card profile>
                  <CardAvatar profile>
                    <img
                      alt={
                        `${prop.xdaUsername}'s Profile`
                      }
                      src={
                        `https://raw.githubusercontent.com/InvictrixRom/team/inv-9.0/avatar/${prop.avatar}`
                      } />
                  </CardAvatar>
                  <CardBody profile>
                    <p>
                      <h3>{prop.name}</h3>
                      <h4>{prop.xdaUsername}</h4>
                    </p>
                    <p>
                      {prop.duties}
                    </p>
                    <Button color="primary" round>
                      Follow
                    </Button>
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
