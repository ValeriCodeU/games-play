import { useEffect, useState, useContext } from "react";
import * as gameService from '../../services/gameService'
import GameListItem from "./game-list-item/GameListItem";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

export default function GameList() {
    const [games, setGames] = useState([]);
    const navigate = useNavigate();
       const {
            isAuthenticated,
          
        } = useContext(AuthContext);
     
     
     
    useEffect(() => {
        gameService.getAll()
        .then(games => setGames(games))
        .catch(err => {
            console.log(err);
            if(isAuthenticated){
                navigate('/create');
            }
           
        })
    }, []);

    console.log(games);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            
            {games.map(g => <GameListItem key={g._id} {...g}/>)};
            
           {games.length === 0 &&  <h3 className="no-articles">No articles yet</h3>}
        </section>
    );
}