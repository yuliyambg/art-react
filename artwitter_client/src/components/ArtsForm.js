import React, {Component} from "react";
import { connect} from "react-redux";
import styles from '../styles/styles.module.css';
import { addArt } from "../actions/artsActions";

class ArtsForm extends Component {
    state = {
        title: '',
        artist_name: '',
        image_url: ''
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })

    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addArt(this.state)
    }


    render() {
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <label>Title:</label><br/>
                <input type='text' value={this.state.title} onChange={this.handleChange} name="title"/> <br/>
                <label>Artist Name:</label><br/>
                <input type='text' value={this.state.artist_name} onChange={this.handleChange} name="artist_name"/><br/>
                <label>Image:</label><br/>
                <input type='text' value={this.state.image_url} onChange={this.handleChange} name="image_url"/><br/>
                <input className={styles.btn} type='submit' value="Create Art"/>
            </form>
        )
    }
}



export default connect(null, {addArt})(ArtsForm);