import React, {Component} from "react";
import { connect } from 'react-redux';
import styles from '../styles/styles.module.css';

import { fetchArts} from "../actions/artsActions";
import ArtsForm from "./ArtsForm";
import ArtsList from "./ArtsList";

class ArtsContainer extends Component {

    componentDidMount() {
        console.log("a")
        this.props.fetchArts()
        console.log("b")
    }


    render() {
        return (
            <div>
                <h1 className={styles.maintitle} >Artwitter</h1>
                <ArtsForm />
                <ArtsList />
            </div>
        )
    }
}

export default connect(null, {fetchArts})(ArtsContainer);