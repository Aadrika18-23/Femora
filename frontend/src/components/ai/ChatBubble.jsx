function ChatBubble({ sender, message }) {
  const isAI = sender === "ai";

  return (
    <div
      className={`flex ${isAI ? "justify-start" : "justify-end"} mb-4`}
    >
      <div
        className={`max-w-md px-5 py-3 rounded-3xl shadow-sm ${
          isAI
            ? "bg-pink-100 text-gray-800"
            : "bg-pink-600 text-white"
        }`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatBubble;