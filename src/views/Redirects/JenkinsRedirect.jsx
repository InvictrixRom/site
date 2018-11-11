import React from "react";

class JenkinsRedirect extends React.Component {
    componentWillMount() {
        this.props.history.push(`/home`);
        window.location = "https://jenkins.invictrixrom.com/"
    }
}

export default JenkinsRedirect;
