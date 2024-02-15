import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {getChat, findChat} from "../actions/chat";
import Conversation from "../components/conversation/Conversation";


const Chat = () => {
    const auth = useSelector((state) => state.auth);
    const chat = useSelector((state) => state.chat.chat); 
    

    const dispatch = useDispatch();

    useEffect(() => {
        if (auth.user) {
            dispatch(getChat(auth.user._id));
        }
    }, [dispatch, auth.user]);

    return (
        <>
            <Navbar />
            <div className="relative grid grid-cols-4 gap-1">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-1 rounded-md p-1 h-screen ">
                        <h2>Czaty</h2>
                        <div className="flex flex-col gap-1">
                            {chat && chat.map((chat) => (
                                <div>
                                    <Conversation data={chat} currentUserId={auth.user._id} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    Right side
                </div>
            </div>
        </>
    );
};

export default Chat;
