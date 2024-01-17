import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
    addLike,
    removeLike,
    addComment,
    removeComment,
    removePost,
} from "../../actions/post";
import { useDispatch } from "react-redux";
import { FaThumbsUp, FaTimes, FaAngleRight } from "react-icons/fa";

import moment from "moment";

const PostItem = ({
    auth,
    post: { _id, content, name, user, likes, comments, date, img },
}) => {
    const dispatch = useDispatch();
    const [commentText, setCommentText] = useState("");

    const handleCommentChange = (event) => {
        setCommentText(event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addComment(_id, { content: commentText }));
        setCommentText("");
    };
    const handleDelete = () => {
        if (window.confirm("Czy na pewno chcesz usunąć ten post?")) {
            dispatch(removePost(_id));
        }
    };

    return (
        <div className="  ">
            <div className="  mx-10 mt-10">
                <div className="bg-white rounded-lg shadow-md p-6 ">
                    <div className="mb-4">
                        <div className="flex items-center space-x-2">
                            <img
                                src="https://picsum.photos/id/237/200/300"
                                alt="avatar"
                                className="w-8 h-8 rounded-full"
                            />
                            <div className="flex justify-between gap-10">
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
                                    <button
                                        className="text-white bg-red-500  px-4 py-2 rounded-lg mt-2"
                                        onClick={handleDelete}
                                    >
                                        <FaTimes />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-800">{content}</p>
                    </div>
                    {img && (
                        <img
                            src={`data:image/jpeg;base64,${img}`}
                            alt="Uploaded content"
                        />
                    )}
                    <button
                        onClick={(e) => dispatch(addLike(_id))}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2 mr-2"
                    >
                        <FaThumbsUp />
                    </button>
                    <span>{likes.length}</span>

                    <form onSubmit={onSubmit} className="flex gap-4 py-4">
                        <input
                            type="text"
                            value={commentText}
                            onChange={handleCommentChange}
                            required
                            placeholder="Dodaj komentarz..."
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            <FaAngleRight />
                        </button>
                    </form>
                    <div>
                        {comments.map((comment) => (
                            <div
                                key={comment._id}
                                className="flex justify-between"
                            >
                                <div>
                                    <p className="text-gray-700 font-semibold">
                                        {comment.name}
                                    </p>
                                    <p className="text-gray-600">
                                        {comment.content}
                                    </p>
                                </div>
                                {comment.user === auth.user._id && (
                                    <button
                                        onClick={() =>
                                            dispatch(
                                                removeComment(_id, comment._id)
                                            )
                                        }
                                        className="text-white bg-red-500 px-4 py-2 rounded-lg mt-2 scale-50"
                                    >
                                        <FaTimes />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
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
