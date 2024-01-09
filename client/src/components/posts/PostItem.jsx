import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostItem = ({
    auth,
    post: { _id, content, name, user, likes, comments, date },
}) => {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="py-5">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="text-gray-600">{content}</p>
                    <p>Data utworzzenia {date}</p>
                    <span>{likes.length}</span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">
                        Like
                    </button>
                    {user === auth.user._id && (
                        <button className="text-blue-500 hover:underline">
                            Usuń post
                        </button>
                    )}
                    <Link
                        to={`/posts/${_id}`}
                        className="text-blue-500 hover:underline"
                    >
                        Zobacz post
                    </Link>
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
