import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner';

function ChatBot() {
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const OPENAI_API_KEY="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";


  const handleToggleChatbot = () => {
    setIsChatbotVisible((prevVisible) => !prevVisible);
  };



  const handleSendMessage = async () => {
    if (value.trim() === "") {
      return; // Don't send empty messages
    }
  
    setIsLoading(true);
    console.log(value);
    console.log(JSON.stringify({ message: value }));

    try {
      const response = await fetch(
        // this url is what our client side code is sending a request to, typically localhost:3001/completions when running locally, websiteurl/completions when deployed
        "https://cybermart-0a118a0c627e.herokuapp.com/completions",
        {
          method: "POST",
          body: JSON.stringify({ message: value }),
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );

       if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  
      const data = await response.json();
      console.log("API Response:", data); // Log the API response
      setMessage(data.choices[0].text);
      setValue("");
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to send message", error);
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex flex-col fixed bottom-0 right-0 w-1/3 h-1/3 bg-gray-200 shadow-md rounded-tl-lg p-2">
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded-lg mb-2"
        onClick={handleToggleChatbot}
        id="chatbot-button"
      >
        Toggle Chatbot
      </button>
      {isChatbotVisible && (
        <div className="flex flex-col h-full">
          <ul className="flex-grow overflow-auto list-none p-2">
            <li className="bg-white p-2 mb-2 rounded-md shadow-md">
              {message || "No messages yet"}
            </li>
          </ul>
          <div className="flex p-2">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow rounded-l-md p-2 border border-gray-300"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
            >
              {isLoading ? (
                <ThreeDots color="#fff" height={20} width={40} />
              ) : (
                "Send"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
