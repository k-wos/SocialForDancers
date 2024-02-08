import React, {useState, useEffect} from 'react'

const Conversation = ({data, currentUserId}) => {

    const [userData, setUserData] = useState(null);


    useEffect(() => {
        const userId = data.members.find((member) => member !== currentUserId);
        const getUserData = async () => {
           
        }
    },[]);
    return (
        <div>Conversation</div>
    )
}

export default Conversation