import { useState } from 'react'
import API from '../services/api'

export default function ChatBot() {
  const [isOpen, setIsOpen] =
    useState(false)

  const [message, setMessage] =
    useState('')

  const [messages, setMessages] =
    useState([
      {
        sender: 'bot',
        text: 'Hi 👋 How can I help you today?',
      },
    ])

  const sendMessage = async () => {
    if (!message.trim()) return

    const userMessage = {
      sender: 'user',
      text: message,
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
    ])

    try {
      const response = await API.post(
        '/chat',
        {
          message,
        }
      )

      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: response.data.reply,
        },
      ])
    } catch (error) {
      console.error(error)
    }

    setMessage('')
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-yellow-400 text-black w-16 h-16 rounded-full shadow-2xl z-50 text-2xl"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden z-50">

          {/* Header */}
          <div className="bg-yellow-400 p-5 font-bold text-black">
            AI Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.sender === 'user'
                    ? 'bg-black text-white ml-auto'
                    : 'bg-gray-100 text-black'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Ask something..."
              className="flex-1 border rounded-xl px-4 py-2"
            />

            <button
              onClick={sendMessage}
              className="bg-yellow-400 px-4 rounded-xl"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  )
}