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
        >
            <textarea
                placeholder="Write your post..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button type="submit">Post</button>
        </form>
    );
};

export default PostForm;
