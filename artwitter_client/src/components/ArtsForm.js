import React, {Component} from "react";
import { connect} from "react-redux";

import { addArt} from "../actions/artsActions";

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
            <form onSubmit={this.handleSubmit}>
                <label>Title:</label>
                <input type='text' value={this.state.title} onChange={this.handleChange} name="title"/> <br/>
                <label>Artist Name:</label>
                <input type='text' value={this.state.artist_name} onChange={this.handleChange} name="artist_name"/><br/>
                <label>Image:</label>
                <input type='text' value={this.state.image_url} onChange={this.handleChange} name="image_url"/><br/>
                <input type='submit' value="Create Art"/>
            </form>
        )
    }
}

export default connect(null, {addArt})(ArtsForm);