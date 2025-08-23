import { useState, useEffect, useContext, useReducer } from "react";
import { useParams } from "react-router-dom";
import * as gameService from "../../services/gameService"
import * as commentSerice from "../../services/commentService"
import AuthContext from "../../contexts/AuthContext";
import useForm from "../../hooks/useForm";


const CommentFormKeys = {
    Comment: 'comment',
}

// Reducer for managing comments state in GameDetails.
// Currently kept local to the component.
// If it grows with more actions (EDIT, DELETE, loading, error, etc.)
// => consider moving it into a separate file (e.g. reducers/commentsReducer.js).
const reducer = (state, action) => {
    switch (action?.type) {
        case 'GET_ALL_COMMENTS':
            return [...action.payload]
        case 'ADD_COMMENT':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default function GameDetails() {
    const { email, userId } = useContext(AuthContext);
    const [game, setGame] = useState({});
    // const [comments, setComments] = useState([]); version without reducer
    const [comments, dispatch] = useReducer(reducer, []);
    const { gameId } = useParams();

    useEffect(() => {
        gameService.getOne(gameId)
            .then(g => setGame(g));

        commentSerice.getAll(gameId)
            .then(comments => {
                console.log(comments);

                dispatch({
                    type: "GET_ALL_COMMENTS",
                    payload: comments
                });
                // setComments(comments);
            });
    }, [gameId]);

    const addCommentHandler = async () => {
        // e.preventDefault();

        // const formData = new FormData(e.currentTarget);

        const newComment = await commentSerice.create(
            gameId,
            // formData.get('comment')
            values.comment
        );

        // setComments(state => [...state, { ...newComment, ownerData: { email } }]);
        newComment.ownerData = { email };
        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        });

        console.log(comments);

        resetForm();
    }

    const { values, onChange, onSubmit, resetForm } = useForm(addCommentHandler, {
        [CommentFormKeys.Comment]: ''
    });

    const isOwner = userId === game._ownerId;

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>

                        {comments.map(c => (
                            <li key={c._id} className="comment">
                                <p>{c.ownerData.email}: {c.text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (<p className="no-comment">No comments.</p>)}
                </div>
                {isOwner && (
                    <div className="buttons">
                        <a href="#" className="button">Edit</a>
                        <a href="#" className="button">Delete</a>
                    </div>
                )}

            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    {/* <input type="text" name="userName" placeholder="User Name"></input> */}
                    <textarea name={[CommentFormKeys.Comment]} value={values[CommentFormKeys.Comment]} onChange={onChange} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}