import React, {Component} from "react";
import { connect} from "react-redux";
import {addComment} from "../actions/commentsAction";


class CommentForm extends Component {
    state = {
        name: '',
        content: ''
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })

    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addComment(this.props.artId, this.state)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/> <br/>
                <label>Content:</label>
                <input type='text' value={this.state.content} onChange={this.handleChange} name="content"/><br/>
                <input type='submit' value="Add comment"/>
            </form>
        )
    }
}

export default connect(null, {addComment})(CommentForm);