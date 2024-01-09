import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../actions/post";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post.posts);
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    return (
        <>
            <h1>Posty</h1>
            <PostForm />
            <div className="flex flex-col gap-2">
                {Array.isArray(posts) &&
                    posts.map((post) => (
                        <PostItem key={post._id} post={post} auth={auth} />
                    ))}
            </div>
        </>
    );
};

export default Posts;
