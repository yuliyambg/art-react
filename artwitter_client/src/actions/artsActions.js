//create action to fetch arts from my api

export const fetchArts = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/arts')
            .then(resp => resp.json())
            .then(arts => dispatch({ type: 'FETCH_ARTS', payload: arts}))
    }
}

export const addArt = art => {
    return (dispatch) => {
    fetch('http://127.0.0.1:3000/arts', {
        method: 'POST',
        body: JSON.stringify(art),
        headers: {'Content-Type': 'application/json'}
    })
        .then(resp =>resp.json())
        .then(art => dispatch({type:'ADD_ART', payload: art}))
    }
}


export const fetchArt = id => {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/arts/${id}`)
            .then(resp => resp.json())
            .then(art => dispatch({ type: 'FETCH_ART', payload: art}))
    }
}
