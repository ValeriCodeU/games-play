import { useEffect, useState } from 'react';
import * as gameService from '../../services/gameService';
import { Link } from 'react-router-dom';
import { buildUrlPath } from '../../utils/pathUtils';
import Path from '../../../paths';

const HomePage = () => {

    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        gameService.getLatest()
            .then(result => {
                setLatestGames(result);
            })
    }, []);



    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {latestGames.map(g => (

                    <div className="game" key={g._id}>
                        <div className="image-wrap">
                            <img src={g.imageUrl} alt={g.title} />
                        </div>
                        <h3>{g.title}</h3>
                        <div className="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className="data-buttons">
                            <Link to={buildUrlPath(Path.GameDetails, { gameId: g._id })} className="btn details-btn">Details</Link>
                        </div>
                    </div>
                ))}



                {!latestGames.length && <p className="no-articles">No games yet</p>}

            </div>
        </section>
    );

}

export default HomePage;