import React, { useState, useEffect } from "react";

function Conversation() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Tutaj możesz pobrać wiadomości z serwera
        // Na razie dodajemy przykładowe wiadomości
        setMessages([
            { id: 1, text: "Wiadomość 1", read: false },
            { id: 2, text: "Wiadomość 2", read: false },
            { id: 3, text: "Wiadomość 3", read: true },
        ]);
    }, []);

    const deleteMessage = (id) => {
        setMessages(messages.filter((message) => message.id !== id));
    };

    return (
        <div>
            {messages.map((message) => (
                <div key={message.id}>
                    <p>{message.text}</p>
                    <button onClick={() => deleteMessage(message.id)}>
                        Usuń
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Conversation;
