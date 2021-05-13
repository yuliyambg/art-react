import React from 'react';
import { connect } from "react-redux";

const ArtsList = ({arts}) => {
    return (
        <div>
            {arts.map(art => <div><ul><li key={art.id}>{art.title} - {art.artist_name}</li></ul> <img src={art.image_url} /></div>)}
        </div>
    );
};


const mapStateToProps = state => {
    return { arts: state.arts}
}

export default connect(mapStateToProps)(ArtsList);