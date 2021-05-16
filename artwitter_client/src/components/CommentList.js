import React from 'react';
import { connect } from "react-redux";


const CommentList = ({comments}) => {
    return (
        <ul>
            {comments.map(comment => <li key={comment.id}>{comment.content} - {comment.name}</li>)}
        </ul>
    );
};


const mapStateToProps = state => {
    return { comments: state.comments}
}

export default connect(mapStateToProps)(CommentList);