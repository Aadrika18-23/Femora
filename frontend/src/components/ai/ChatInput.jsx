import { useState } from "react";
import { FaPaperPlane, FaMicrophone, FaPaperclip } from "react-icons/fa";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-md p-3 flex items-center gap-3"
    >
      <button
        type="button"
        className="text-pink-600 text-xl hover:scale-110 transition"
      >
        <FaPaperclip />
      </button>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask EERA anything..."
        className="flex-1 outline-none px-2 text-gray-700"
      />

      <button
        type="button"
        className="text-pink-600 text-xl hover:scale-110 transition"
      >
        <FaMicrophone />
      </button>

      <button
        type="submit"
        className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition"
      >
        <FaPaperPlane />
      </button>
    </form>
  );
}

export default ChatInput;