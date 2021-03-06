import React, {Component} from "react";
import Art from "./Art";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import {connect} from "react-redux";
import {fetchComments} from "../actions/commentsAction";
import {Link} from 'react-router-dom'

class ArtContainer extends Component {


    componentDidMount() {
        // console.log(this.props)
        this.props.fetchComments(this.props.match.params.id)
    }


    render() {
        return (
            <div>
                {/*<Link to={`/arts`}>Go back</Link>*/}
                <a href={`/arts`}>Go back</a>

                <Art artId={this.props.match.params.id}/>
                <hr/>
                <CommentForm artId={this.props.match.params.id}/>
                <hr/>
                <CommentList />
            </div>
        )
    }
}

export default connect(null, {fetchComments})(ArtContainer);