//create action to fetch arts from my api

export const fetchArts = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/arts')
            .then(resp => resp.json())
            .then(arts => console.log('fetchArts', arts))
    }
}