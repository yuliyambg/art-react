import React from 'react';
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, CardColumns } from "react-bootstrap";


const ArtsList = ({arts}) => {

        return (
            <CardColumns style={{display: 'flex', flexFlow: 'row wrap'}}>

                {arts.map(art => {
                    return (
                        <Card>
                            <Card.Body>
                                <li key={art.id}><a href={`arts/${art.id}`}>{art.title} - {art.artist_name}</a></li>
                                <img src={art.image_url}/>
                            </Card.Body>
                        </Card>
                    )
                    }
                )}

            </CardColumns>
        );

};


const mapStateToProps = state => {
    return { arts: state.arts}
}

export default connect(mapStateToProps)(ArtsList);