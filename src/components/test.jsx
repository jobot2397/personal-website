import { useState, useEffect } from 'react';
import { Ollama } from 'ollama';

function OllamaChat() {
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState('');

  const streamResponse = async (userPrompt) => {
    setIsLoading(true);
    setResponse(''); // Clear previous response
    
    try {
      const ollama = new Ollama({
        host: "https://joegpt.taile4be99.ts.net",
      });

      const stream = await ollama.chat({
        model: "llama3.2:1b",
        messages: [
          {
            role: "user",
            content: userPrompt,
          }
        ],
        stream: true,
      });

      // Process each chunk as it arrives
      for await (const chunk of stream) {
        if (chunk.message?.content) {
          // Update state with each new piece - this will update the UI
          setResponse(prev => prev + chunk.message.content);
        }
      }
    } catch (error) {
      console.error("Error streaming from Ollama:", error);
      setResponse(prev => prev + "\nError: Could not complete the response.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      streamResponse(prompt);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Ollama Chat</h1>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-grow p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ask something..."
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Send'}
          </button>
        </div>
      </form>
      
      <div className="border p-4 rounded min-h-[200px] whitespace-pre-wrap">
        {response || "Response will appear here..."}
        {isLoading && !response && "Loading..."}
        {isLoading && <span className="animate-pulse">▋</span>}
      </div>
    </div>
  );
}

export default OllamaChat;