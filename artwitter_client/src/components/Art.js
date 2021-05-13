import React from "react";

// import React, {useState} from "react";
import {connect} from "react-redux";
// import {addArt, fetchArt, fetchArts} from "../actions/artsActions";
import { fetchArt } from "../actions/artsActions";

class Art extends React.Component {

    componentWillMount() {
        this.props.fetchArt(this.props.artId);
    }

    render () {
        return (
            <div>
                <h1>{this.props.artwork.title}</h1>
                <h2>{this.props.artwork.artist_name}</h2>
                <img src={this.props.artwork.image_url} />
            </div>
        )
    }
}

const mapStateToPropsArt = state => {
    return { artwork: state.arts }
}

export default connect(mapStateToPropsArt, {fetchArt})(Art);
