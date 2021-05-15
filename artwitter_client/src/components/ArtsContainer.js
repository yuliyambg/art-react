import React, {Component} from "react";
import { connect } from 'react-redux';
import styles from '../styles/styles.module.css';

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
                <h1 className={styles.maintitle} >Artwitter</h1>
                {/*<button onClick={showForm}>AddArt</button>*/}
                <ArtsForm />
                <ArtsList />
            </div>
        )
    }
}

export default connect(null, {fetchArts})(ArtsContainer);