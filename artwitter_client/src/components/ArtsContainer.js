import React, {Component} from "react";
import { connect } from 'react-redux';

import { fetchArts} from "../actions/artsActions";
import ArtsForm from "./ArtsForm";

class ArtsContainer extends Component {

    componentDidMount() {
        this.props.fetchArts()
    }

    render() {
        return (
            <div>
                <ArtsForm />
                ArtsContainer
            </div>
        )
    }
}

export default connect(null, {fetchArts})(ArtsContainer);