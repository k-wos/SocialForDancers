import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = () => {
    const dispatch = useDispatch();

    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    const onFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("content", content);
        if (image) {
            formData.append("upload", image);
        }

        dispatch(addPost(formData));
        setContent("");
        setImage(null);
    };

    return (
        <form
            onSubmit={onFormSubmit}
            className="bg-white rounded-lg shadow-md py-7 px-8 mx-10 max-w-4xl w-full "
            encType="multipart/form-data"
        >
            <textarea
                placeholder="Co Ci tańczy po głowie?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-32 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="my-2"
            />
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
