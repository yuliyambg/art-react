import React from 'react';
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, CardColumns } from "react-bootstrap";
import {Link} from "react-router-dom"

const ArtsList = ({arts}) => {

        return (
            <CardColumns style={{display: 'flex', flexFlow: 'row wrap'}}>

                {arts.map(art => {
                    return (
                        <Card key={art.id}>
                            <Card.Body>
                                {/*<li><a href={`arts/${art.id}`}>{art.title} - {art.artist_name}</a></li>*/}
                                <li><Link to={`/arts/${art.id}`}>{art.title} - {art.artist_name}</Link></li>
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