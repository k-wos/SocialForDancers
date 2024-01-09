import { useState } from "react";
import { addPost } from "../../actions/post";
import { useDispatch } from "react-redux";

const PostForm = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(addPost({ text }));
                setText("");
            }}
        >
            <textarea
                placeholder="Write your post..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button type="submit">Post</button>
        </form>
    );
};

export default PostForm;
