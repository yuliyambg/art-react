import React, {Component} from "react";
import { connect } from 'react-redux';

import { fetchArts} from "../actions/artsActions";
import ArtsForm from "./ArtsForm";
import ArtsList from "./ArtsList";

class ArtsContainer extends Component {

    componentDidMount() {
        this.props.fetchArts()
    }

    render() {
        return (
            <div>
                ArtsContainer
                <ArtsForm />
                <ArtsList />
            </div>
        )
    }
}

export default connect(null, {fetchArts})(ArtsContainer);