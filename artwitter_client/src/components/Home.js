import React from "react";
import styles from '../styles/styles.module.css';
import "bootstrap/dist/css/bootstrap.min.css"

const Home = () => {
    return(
        <div className={styles.about}>
            <div className={styles.aboutContainer}>
                <h1>FOR THE LOVE OF ART</h1>
                <p>
                    <span>Artwitter envisions a future where people are moved by art every day. It was built to enable people to meet on the platform and discuss about art. The platform also offers an opportunity for artists from all ages to share their artworks and gain popularity. Living in ArtWorld around the world. Discover new trends, new talents and simply enjoy fine art, we at Artwitter believe that sharing our passion for art will make the world a wonderful place as wonderful as the art itself. We are dedicated to making an exciting, welcoming experience that connects art-lovers, connoisseurs, artists and artworks.</span>
                </p>
                <h3><a href={`/arts`}>Explore our art gallery</a></h3>
            </div>
        </div>
    )
}


export default Home;