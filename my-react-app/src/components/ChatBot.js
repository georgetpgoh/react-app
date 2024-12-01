// src/components/Chatbot.js
import React, { useState, useEffect, useRef } from 'react';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { sendMessage } from '../services/API.js';
import '../styles/ChatBot.css'; // Styles specific to the chatbot

const Chatbot = () => {
    const [userMessage, setUserMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(false); // Track if the bot is typing/responding

    const textAreaRef = useRef(null);
    const chatHistoryRef = useRef(null);

    useEffect(() => {
        // Adjust the height of the textarea when userMessage changes
        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto'; // Reset height to auto to allow resize
            textAreaRef.current.style.height = `${Math.min(textAreaRef.current.scrollHeight, 200)}px`; // Set the height to the scrollHeight but not exceed 200px
        }
    }, [userMessage]);

    useEffect(() => {
        // Scroll to the bottom of chat history whenever it updates
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        }
    }, [chatHistory]);

    const handleSendMessage = async () => {
        if (!userMessage.trim()) return;

        const newMessage = { sender: 'user', text: userMessage };

        // Add the user's message first
        setChatHistory((prevHistory) => [...prevHistory, newMessage]);

        setLoading(true);
        try {

            // Send the user's message to the backend
            const response = await sendMessage(userMessage);

            // Convert Markdown to HTML using marked
            const rawHTML = marked(response.data.response);
            const sanitizedHTML = DOMPurify.sanitize(rawHTML);

            const botMessage = {
                sender: 'bot',
                text: rawHTML,         // Raw HTML content (can be used for markdown rendering)
                sanitizedHTML: sanitizedHTML,  // Sanitized HTML content (safe for injection into the DOM)
            };

            // Add the bot's response to the chat history
            setChatHistory((prevHistory) => [...prevHistory, botMessage]);
        } catch (error) {
           
                console.error('Error sending message', error);
                const errorMessage = {
                    sender: 'bot',
                    text: 'Sorry, something went wrong. Please try again.',
                };
                setChatHistory((prevHistory) => [...prevHistory, errorMessage]);
            
        } finally {
            setLoading(false); // Stop loading after the bot responds
        }

        // Clear the input field after sending
        setUserMessage('');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            // Prevent default behavior (adding a new line)
            event.preventDefault();
            handleSendMessage(); // Send message on Enter
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chat-history" ref={chatHistoryRef}>
                {chatHistory.map((msg, index) => (
                    <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                        <div>
                            <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong>
                        </div>
                        <div>
                            {msg.sender === 'user' ? (
                                // Display user message as plain text, preserving newlines
                                <span className='user-msg'>{msg.text}</span>
                            ) : (
                                // Render bot's response as sanitized HTML
                                <span className='bot-msg' dangerouslySetInnerHTML={{ __html: msg.sanitizedHTML }} />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="input-container">
                {loading ? (
                    <div className="loading">
                        <div className="loading-content">
                            <div className="loading-text">
                                <span className="loading-text-words">B</span>
                                <span className="loading-text-words">O</span>
                                <span className="loading-text-words">T</span>
                                <span className="loading-text-words"> </span>
                                <span className="loading-text-words">T</span>
                                <span className="loading-text-words">Y</span>
                                <span className="loading-text-words">P</span>
                                <span className="loading-text-words">I</span>
                                <span className="loading-text-words">N</span>
                                <span className="loading-text-words">G</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <textarea
                            ref={textAreaRef} // Reference to the textarea
                            value={userMessage}
                            onChange={(event) => setUserMessage(event.target.value)}
                            onKeyDown={handleKeyDown} // Handle Enter key event
                            placeholder="Type your message..."
                            className="chat-input"
                        />
                        <button onClick={handleSendMessage} className="send-button">
                            Send
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Chatbot;
