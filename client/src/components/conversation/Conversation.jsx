import React, {useState, useEffect} from 'react'
import { getUser } from '../../actions/user';
import { useDispatch, useSelector } from 'react-redux';

const Conversation = ({data, currentUserId}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);



    useEffect(() => {
        const userId = data.members.find((member) => member !== currentUserId);
        dispatch(getUser(userId));
    },[dispatch]);
    return (
        <div>Conversation</div>
        
    )
}

export default Conversation