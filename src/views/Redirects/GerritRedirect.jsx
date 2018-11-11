import React from "react";

class GerritRedirect extends React.Component {
    componentWillMount() {
        this.props.history.push(`/home`);
        window.location = "https://review.invictrixrom.com/";
    }

    render() {
        return null;
    }
}

export default GerritRedirect;
