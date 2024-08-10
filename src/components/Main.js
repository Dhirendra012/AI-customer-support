import React, { useState } from 'react';
import Header from './Header'
import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import AI from '../utils/gemini';

const Main = () => {

  const { isLoaded, isSignedIn } = useUser();

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');

  const handleSearchClick = async () => {
    const prompt = input + '. Explain this que in 100 words.';
    const result = await AI.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    // setReply(text);
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { text: text , isUser: false }]);
    }, 1000);
  }

  const sendMessage = () => {

    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
    }

    handleSearchClick();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  if (!isSignedIn && isLoaded) { return <Navigate to={'/login'} />; }

  return (
    <>
      <div className='bg-sky-500'>
        <Header />
      </div>
      <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-[722px] flex'>
        <div className="flex flex-col h-[600px] w-7/12 border border-gray-300 rounded-lg p-4 m-auto">
          <div className="flex-1 overflow-y-auto space-y-2 p-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-[70%] ${message.isUser ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex space-x-2 mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 p-2 border border-gray-300 rounded-lg"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main;
