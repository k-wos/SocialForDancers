import Navbar from "../components/layout/Navbar";
const Chat = () => {
    return (
        <>
            <Navbar />
            <div className="h-screen w-full flex flex-column justify-center gap-1 items-center bg-slate-200">
                <div
                    className="w-5/6 h-5/6 bg-white grid"
                    style={{ gridTemplateColumns: "25% 75%" }}
                ></div>
            </div>
        </>
    );
};

export default Chat;
