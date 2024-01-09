import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { addLike, removeLike } from "../../actions/post";
import { useDispatch } from "react-redux";
import { FaThumbsUp } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import moment from "moment";

const PostItem = ({
    auth,
    post: { _id, content, name, user, likes, comments, date },
}) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="py-5 border-b border-gray-300">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-bold">{name}</h2>
                        {user === auth.user._id && (
                            <button className="text-white bg-red-500  px-4 py-2 rounded-lg mt-2">
                                <FaTimes />
                            </button>
                        )}
                    </div>
                    <p className="text-gray-600">{content}</p>
                    <p>Data utworzenia {moment(date).format("MM/DD/YYYY")}</p>

                    <Link
                        to={`/posts/${_id}`}
                        className="text-blue-500 hover:underline"
                    >
                        Zobacz post
                    </Link>
                </div>
                <button
                    onClick={(e) => dispatch(addLike(_id))}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
                >
                    <FaThumbsUp />
                </button>
                <span>{likes.length}</span>
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
