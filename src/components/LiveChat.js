import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { v4 as uuidv4 } from 'uuid';
import { createRandomMessage } from "../utils/utils";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = React.useState("");

  const dispatch = useDispatch();

  const messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      //API Polling
      dispatch(addMessage({ name: "Saket Ozarkar", message: "Hello World!!" }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const sendLiveMessage = async () => {
    const message = {
      userId: uuidv4(),
      messageContent: liveMessage,
      videoId: "1234"
    }

    //Send post request to server at port 8080
    const response = await fetch("http://localhost:8080/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });


    dispatch(addMessage({ name: "Saket Ozarkar", message: liveMessage }));
    setLiveMessage("");
  };


  return (
    <>
      <div
        className="ml-2 p-2 sm:h-[200px] md:h-[400px]
     lg:h-[585px] px-2 mx-5 my-4 border border-black bg-slate-50 overflow-y-scroll flex flex-col-reverse"
      >
        <div>
          {" "}
          {messages.map((message, idx) => (
            <ChatMessage key={idx} name={message.name} message={message.message} />
          ))}
        </div>
      </div>
      <div className="ml-2 p-2 px-2 mx-5 border border-black bg-slate-50 flex justify-between">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full py-1 px-2"
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          value={liveMessage}
        />
        <button
          onClick={sendLiveMessage}
          className="bg-green-100 text-black px-2 py-1 rounded-md"
        >
          Send
        </button>
      </div>
    </>
  );
};

export default LiveChat;
