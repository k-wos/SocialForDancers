import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import { useSelector } from "react-redux";

const Chat = () => {
    const auth = useSelector((state) => state.auth);
    const [chat, setChat] = useState([]);

    
    return (
        <>
            <Navbar />
            <div className="relative grid grid-cols-4 gap-1">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-1 rounded-md p-1 h-screen ">
                        <h2>Czaty</h2>
                        <div className="flex flex-col gap-1">
                            Konwersacje
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
