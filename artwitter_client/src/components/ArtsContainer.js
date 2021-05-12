import React, {Component} from "react";
import { connect } from 'react-redux';

import { fetchArts} from "../actions/artsActions";

class ArtsContainer extends Component {
    render() {
        return (
            <div>
                ArtsContainer
            </div>
        )
    }
}

export default connect(null, {fetchArts})(ArtsContainer);