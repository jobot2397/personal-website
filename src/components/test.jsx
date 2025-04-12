import { useState, useEffect, useRef } from 'react';
import { Ollama } from 'ollama';

function OllamaChat() {
    // State for conversation history - array of message objects
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const placeHolderMessages = [
        "Ask me why I beekeep despite being allergic...",
        "Ask me why I have seen The Trailer Park Boys over 7 times, 8 probably by the time you're reading this...",
        "Ask me why I moved from New Jersey to Texas...",
        "Ask me how often I play pickleball...",
        "Ask me who my favorite battlebot is..."
    ]

    // Function to scroll to bottom of messages
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Scroll to bottom whenever messages change
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const fixedResponses = (inputText, response) => {
        // Prefixed responses

        // Add user message to the chat
        const userMessage = { role: 'user', content: inputText };
        setMessages(prevMessages => [...prevMessages, userMessage]);

        // Add AI message to the chat
        const aiMessage = { role: 'assistant', content: response };
        setMessages(prevMessages => [...prevMessages, aiMessage]);
    }

    const handleSendMessage = async () => {

        if (!inputText.trim()) return;

        // Add user message to the chat
        const userMessage = { role: 'user', content: inputText };
        setMessages(prevMessages => [...prevMessages, userMessage]);

        // Clear input field
        setInputText('');

        // Show loading state
        setIsLoading(true);

        try {
            // Create Ollama client
            const ollama = new Ollama({
                host: "http://192.168.100.25:11434",
            });

            // Prepare message history for the API call
            const chatHistory = [...messages, userMessage];

            // Add empty assistant message to start streaming into
            setMessages(prevMessages => [
                ...prevMessages,
                { role: 'assistant', content: '' }
            ]);

            // Start streaming
            const stream = await ollama.chat({
                model: "llama3.2:1b",
                messages: chatHistory,
                stream: true,
            });

            // Process the stream
            for await (const chunk of stream) {
                if (chunk.message?.content) {
                    setMessages(prevMessages => {
                        const newMessages = [...prevMessages];
                        // Update the last message (which is the assistant's)
                        const lastIndex = newMessages.length - 1;
                        newMessages[lastIndex] = {
                            ...newMessages[lastIndex],
                            content: newMessages[lastIndex].content + chunk.message.content
                        };
                        return newMessages;
                    });
                }
            }
        } catch (error) {
            console.error("Error streaming from Ollama:", error);
            // Add error message
            setMessages(prevMessages => [
                ...prevMessages,
                { role: 'system', content: 'Error: Failed to get response from Ollama.' }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex-1 flex flex-col w-3/5 mx-auto pb-4 overflow-hidden">
            {messages.length === 0 ? (
                // Empty state centered in the available space
                <div className="flex-1 flex flex-col justify-center items-center">
                    <div className="w-full">
                        <div className="flex justify-center">
                            <div className="max-w-md">
                                <img src="/images/profile-laptop.png" alt="Profile" />
                            </div>
                        </div>
                        <div className="flex justify-center pt-2 text-text font-semibold text-[28px]">
                            Hi, my name is Joseph Lawler!
                        </div>
                        <div className="flex justify-center pt-1 pb-4 text-text text-[20px]">
                            Learn more about me using the chat or buttons below
                        </div>
                    </div>
                </div>
            ) : (
                // Messages with scrolling - ensuring it stays within bounds
                <div className="flex-1 overflow-y-auto mb-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`mb-4 ${message.role === 'user'
                                    ? 'text-text bg-border ml-auto'
                                    : 'text-text'
                                } p-3 rounded-3xl max-w-[80%] px-4 w-fit ${message.role === 'user' ? 'ml-auto' : 'mr-auto'
                                }`}
                        >
                            <div className="whitespace-pre-wrap">
                                {message.content}
                                {index === messages.length - 1 &&
                                    message.role === 'assistant' &&
                                    isLoading &&
                                    <span className="animate-pulse">▋</span>}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            )}

            {/* Chat input container - fixed at bottom */}
            <div className="mt-auto">
                <div className="flex bg-secondary-grey rounded-3xl w-full">
                    <form onSubmit={handleSendMessage} className="w-full">
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            className="flex justify-start pt-4 pb-2 pl-4 text-text text-[14px] w-full focus:outline-0 "
                            placeholder={placeHolderMessages[Math.floor(Math.random() * placeHolderMessages.length)]}
                            disabled={isLoading}
                        />
                        {/* Need to make these buttons overflow to two rows on mobile */}
                        <div className="flex flex-row items-center justify-between p-2 w-full">
                            <div className="flex flex-row gap-2 justify-center">
                                <button className="h-fit bg-transparent rounded-3xl px-4 py-2 border-[1px] border-border text-text text-[13px] font-semibold"
                                    onClick={() => fixedResponses("What job experience does Joseph Lawler have?","idk lol ")}>
                                    Experience
                                </button>
                                <button className="h-fit bg-transparent rounded-3xl px-4 py-2 border-[1px] border-border text-text text-[13px] font-semibold"
                                    onClick={() => fixedResponses("What patents does Joseph Lawler have?","idk lol ")}>
                                    Patents
                                </button>
                                <button className="h-fit bg-transparent rounded-3xl px-4 py-2 border-[1px] border-border text-text text-[13px] font-semibold"
                                    onClick={() => fixedResponses("What skills does Joseph Lawler have?","idk lol ")}>                               
                                    Skills
                                </button>
                                <button className="h-fit bg-transparent rounded-3xl px-4 py-2 border-[1px] border-border text-text text-[13px] font-semibold"
                                    onClick={() => fixedResponses("What education does Joseph Lawler have?","idk lol ")}>
                                    Education
                                </button>
                            </div>
                            <div className="flex">
                                <button
                                    type="submit"
                                    className="flex bg-border rounded-full aspect-square justify-center items-center p-2 cursor-pointer hover:bg-primary-white"
                                    disabled={isLoading}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="rgb(48, 48, 48)" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OllamaChat;