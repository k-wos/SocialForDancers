import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
    addLike,
    removeLike,
    addComment,
    removeComment,
} from "../../actions/post";
import { useDispatch } from "react-redux";
import { FaThumbsUp } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import moment from "moment";

const PostItem = ({
    auth,
    post: { _id, content, name, user, likes, comments, date },
}) => {
    const dispatch = useDispatch();
    const [commentText, setCommentText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addComment(_id, { content: commentText }));
        setCommentText("");
    };
    return (
        <>
            <div className="flex  justify-center mx-10 mt-10">
                <div className="bg-white rounded-lg shadow-md p-6 w-full">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <img
                                src="https://picsum.photos/id/237/200/300"
                                alt="avatar"
                                className="w-8 h-8 rounded-full"
                            />
                            <div>
                                <p className="text-gray-800 font-semibold">
                                    {name}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    Utworzono:{" "}
                                    {moment(date).format("MM/DD/YYYY")}
                                </p>
                            </div>
                            {user === auth.user._id && (
                                <button className="text-white bg-red-500  px-4 py-2 rounded-lg mt-2">
                                    <FaTimes />
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-800">{content}</p>
                    </div>
                    <button
                        onClick={(e) => dispatch(addLike(_id))}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2 mr-2"
                    >
                        <FaThumbsUp />
                    </button>
                    <span>{likes.length}</span>
                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            required
                        />
                        <button type="submit">Add Comment</button>
                    </form>
                    <div>
                        {comments.map((comment) => (
                            <div key={comment._id}>
                                <p>{comment.name}</p>
                                <p>{comment.content}</p>
                                {comment.user === auth.user._id && (
                                    <button
                                        onClick={() =>
                                            dispatch(
                                                removeComment(_id, comment._id)
                                            )
                                        }
                                        className="text-white bg-red-500 px-4 py-2 rounded-lg mt-2"
                                    >
                                        <FaTimes />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

PostItem.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        likes: PropTypes.array.isRequired,
        comments: PropTypes.array.isRequired,
        date: PropTypes.string.isRequired,
    }).isRequired,
};

export default PostItem;
