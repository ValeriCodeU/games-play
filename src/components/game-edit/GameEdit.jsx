import { useEffect, useState } from "react";
import * as gameService from "../../services/gameService";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";

const GameFormKeys = {
    Title: "title",
    Category: "category",
    MaxLevel: "maxLevel",
    ImageUrl: "imageUrl",
    Summary: "summary",
};

export default function GameEdit() {

    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => {
                console.log(result)
                setGame(result);
            });
    }, [gameId]);


    const updateGameSubmitHandler = async (values) => {

        try {
            await gameService.update(gameId, values);
            navigate('/games')
        } catch (error) {
            console.log(error);
        }
    }

    const { values, onChange, onSubmit } = useForm(updateGameSubmitHandler, game);    

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Game</h1>

                    <label htmlFor="title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name={GameFormKeys.Title}
                        value={values[GameFormKeys.Title] || ""}
                        onChange={onChange}
                        placeholder="Enter game title..."
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name={GameFormKeys.Category}
                        value={values[GameFormKeys.Category] || ""}
                        onChange={onChange}
                        placeholder="Enter game category..."
                    />

                    <label htmlFor="maxLevel">Max Level:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name={GameFormKeys.MaxLevel}
                        value={values[GameFormKeys.MaxLevel] || ""}
                        onChange={onChange}
                        min="1"
                        placeholder="1"
                    />

                    <label htmlFor="imageUrl">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name={GameFormKeys.ImageUrl}
                        value={values[GameFormKeys.ImageUrl] || ""}
                        onChange={onChange}
                        placeholder="Upload a photo..."
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        id="summary"
                        name={GameFormKeys.Summary}
                        value={values[GameFormKeys.Summary] || ""}
                        onChange={onChange}
                    />

                    <input className="btn submit" type="submit" value="Save Game" />
                </div>
            </form>
        </section>
    );
}