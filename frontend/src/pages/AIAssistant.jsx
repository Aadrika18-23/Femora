import { useState } from "react";

import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";

import AIHeader from "../components/ai/AIHeader";
import AIWarningBanner from "../components/ai/AIWarningBanner";
import SuggestionCards from "../components/ai/SuggestionCards";
import ChatBubble from "../components/ai/ChatBubble";
import ChatInput from "../components/ai/ChatInput";
import AISummaryCard from "../components/ai/AISummaryCard";

function AIAssistant() {

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      message:
        "Hi 👋 I'm EERA. I'm here to support your women's health journey. How are you feeling today?",
    },
    {
      sender: "user",
      message: "I've been having cramps.",
    },
    {
      sender: "ai",
      message:
        "I'm sorry you're experiencing that. Can you tell me how severe the cramps are and how long you've been experiencing them?",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

const handleSend = async (message) => {
  // Add user's message immediately
  setMessages((previousMessages) => [
    ...previousMessages,
    {
      sender: "user",
      message: message,
    },
  ]);

  // Show EERA typing
  setIsTyping(true);

  try {
    const response = await fetch("http://127.0.0.1:8000/ai/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to get response from EERA");
    }

    const data = await response.json();

    setMessages((previousMessages) => [
      ...previousMessages,
      {
        sender: "ai",
        message: data.response,
      },
    ]);
  } catch (error) {
    console.error("EERA API Error:", error);

    setMessages((previousMessages) => [
      ...previousMessages,
      {
        sender: "ai",
        message:
          "I'm having trouble connecting right now. Please try again in a moment.",
      },
    ]);
  } finally {
    setIsTyping(false);
  }
};

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-pink-50 px-6 py-8 pb-28">

        {/* AI Header */}
        <AIHeader />

        {/* Medical Warning */}
        <div className="mt-6">
          <AIWarningBanner />
        </div>

        {/* Suggestions */}
        <div className="mt-6">
          <SuggestionCards onSelect={handleSend} />
        </div>

        {/* Chat */}
        <div className="mt-8 bg-white rounded-3xl shadow-md p-6">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Chat with EERA
          </h2>

          {/* Messages */}

          <div className="space-y-4">

            {messages.map((item, index) => (
              <ChatBubble
                key={index}
                sender={item.sender}
                message={item.message}
              />
            ))}

            {/* Typing indicator */}

            {isTyping && (
              <div className="flex justify-start mb-4">

                <div className="bg-pink-100 text-gray-600 px-5 py-3 rounded-3xl">

                  <span className="animate-pulse">
                    EERA is typing...
                  </span>

                </div>

              </div>
            )}

          </div>

          {/* Input */}

          <div className="mt-8">
            <ChatInput onSend={handleSend} />
          </div>

        </div>

        <AISummaryCard />

      </div>

      <BottomNav />
    </>
  );
}

export default AIAssistant;