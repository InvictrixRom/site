import React from "react";

import moment from 'moment'

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ReactGA from 'react-ga';

import S3Client from "aws-sdk/clients/s3"
const S3 = new S3Client({
  apiVersion: '2006-03-01',
  accessKeyId: "AKIAI34UZ7TTLX3HTVUA",
  secretAccessKey: "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",
  region: 'us-east-1'
});

ReactGA.initialize('UA-129055958-1');

class Downloads extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      builds: null
    }
  }

  componentDidMount() {
    S3.listObjects({ Bucket: "invictrix-builds" }, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        data.Contents.forEach((build) => {
          var splitFilename = build.Key.split('/');
          build.device = splitFilename[0]
          build.link = "https://s3.amazonaws.com/invictrix-builds/" + build.Key
          build.filename = splitFilename[1]
          build.date = moment(splitFilename[1].split('-')[5], "YYYYMMDD").format("MM/DD/YYYY");
        });
        this.setState({ builds: data.Contents });
      }
    }.bind(this));
  }

  formatBytes(size, precision = 2) {
    if (size === 0)
      return "0 Bytes";
    var byteSteps = 1024,
      labels = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      factor = Math.floor(Math.log(size) / Math.log(byteSteps));
    return parseFloat((size / Math.pow(byteSteps, factor)).toFixed(precision)) + " " + labels[factor]
  }

  render() {
    return (
      <div>
        <Paper style={{backgroundColor: "#333"}}>
          <Table style={{borderColor: "#000"}}>
            <TableHead>
              <TableRow>
                <TableCell style={{borderBottom: '1px solid #222', color: "#fff"}}>File Name</TableCell>
                <TableCell style={{borderBottom: '1px solid #222', color: "#fff"}}>Device</TableCell>
                <TableCell style={{borderBottom: '1px solid #222', color: "#fff"}}>Date</TableCell>
                <TableCell style={{borderBottom: '1px solid #222', color: "#fff"}}>Size</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.builds && this.state.builds.map((build, key) => {
                return (
                  <TableRow key={key}>
                    <TableCell style={{borderBottom: '1px solid #222'}}>
                      <a href={build.link} onClick={() => {
                        ReactGA.event({
                          category: 'Download',
                          action: 'Download',
                          label: build.filename
                        });
                      }}>
                        {build.filename}
                      </a>
                    </TableCell>
                    <TableCell style={{borderBottom: '1px solid #222', color: "#fff"}}>
                      {build.device}
                    </TableCell>
                    <TableCell style={{borderBottom: '1px solid #222', color: "#fff"}}>{build.date}</TableCell>
                    <TableCell style={{borderBottom: '1px solid #222', color: "#fff"}}>{this.formatBytes(build.Size)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default Downloads;
