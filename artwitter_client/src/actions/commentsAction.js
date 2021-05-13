export const addComment = ( id, comment )=> {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/arts/${id}/comments`, {
            method: 'POST',
            body: JSON.stringify({...comment, "art_id": id}),
            headers: {'Content-Type': 'application/json'}
        })
            .then(resp => resp.json())
            .then(comment => dispatch({ type: 'ADD_COMMENT', payload: comment}))
    }
}

export const fetchComments = (id)=> {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/arts/${id}/comments`)
            .then(resp => resp.json())
            .then(comments => dispatch({ type: 'FETCH_COMMENTS', payload: comments}))
    }
}