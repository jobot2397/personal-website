import { Ollama } from "ollama";

// Set up the client with your server IP
const ollama = new Ollama({
  host: "http://192.168.100.25:11434",
});

export const ChatPrompt = ({ enableGreeting }) => {

    const callAPI = async () => {
        try {
            // Create a streaming chat completion
            const stream = await ollama.chat({
              model: "llama3.2:1b",
              messages: [
                {
                  role: "user",
                  content: "Tell me a short story about a robot",
                }
              ],
              stream: true,
            });
        
            let fullResponse = "";
        
            // Process each chunk as it arrives
            for await (const chunk of stream) {
              if (chunk.message?.content) {
                // Log each new piece of content
                const newContent = chunk.message.content;
                console.log(newContent);
                fullResponse += newContent;
              }
            }
        
            console.log("Full response:", fullResponse);
            console.log("Stream completed");
          } catch (error) {
            console.error("Error streaming from Ollama:", error);
          }
    }

    return (
        <div className="bg-transparent w-full flex flex-col">
            {enableGreeting &&
            <div className="min-w-3/5">
                <div className="flex justify-center">
                    <div className="max-w-md">
                    <img src="/images/profile-laptop.png"/>
                    </div>
                </div>
                <div className="flex justify-center pt-2 text-text font-semibold text-[28px]">
                    Hi, my name is Joseph Lawler!
                </div>
                <div className="flex justify-center pt-1 pb-4 text-text text-[20px]">
                    Learn more about me using the chat or buttons below
                </div>
                </div>
            }
            <div className="flex justify-center">
                <div className="flex flex-col bg-secondary-grey rounded-3xl min-w-3/5">
                    <div className="flex justify-start pt-4 pb-2 pl-4 text-text text-[14px]">
                        Some funny prompt
                    </div>
                    {/* Need to make these buttons overflow to two rows on mobile */}
                    <div className="flex items-center justify-between p-2">
                        <div className="flex flex-row gap-2 justify-center">
                            <div className="h-fit bg-transparent rounded-3xl px-4 py-2 border-[1px] border-border text-text text-[13px] font-semibold">
                                Experience
                            </div>
                            <div className="h-fit bg-transparent rounded-3xl px-4 py-2 border-[1px] border-border text-text text-[13px] font-semibold">
                                Patents
                            </div>
                            <div className="h-fit bg-transparent rounded-3xl px-4 py-2 border-[1px] border-border text-text text-[13px] font-semibold">
                                Skills
                            </div>
                            <div className="h-fit bg-transparent rounded-3xl px-4 py-2 border-[1px] border-border text-text text-[13px] font-semibold">
                                Education
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="flex bg-border rounded-full aspect-square justify-center items-center p-2 cursor-pointer" onClick={callAPI}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="rgb(48, 48, 48)" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}