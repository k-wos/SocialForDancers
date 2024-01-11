import { useState } from "react";
import { addPost } from "../../actions/post";
import { useDispatch } from "react-redux";

const PostForm = () => {
    const dispatch = useDispatch();

    const [content, setContent] = useState("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(addPost({ content }));
                setContent("");
            }}
            className="bg-white rounded-lg shadow-md py-7 px-8 mx-10 max-w-2xl w-full "
        >
            <textarea
                placeholder="Co Ci tańczy po głowie?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-32 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
                type="submit"
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
                Opublikuj
            </button>
        </form>
    );
};

export default PostForm;
