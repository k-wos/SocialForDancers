import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../actions/post";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    return <div>Posts</div>;
};

export default Posts;
