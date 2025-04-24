import { useState, useEffect, useRef } from "react";
import { Ollama } from "ollama/browser";
import JoeGPTGuidelines from "/prompt.txt";
import Markdown from "react-markdown";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import {
  FIXED_RESPONSES,
  HOST,
  MODEL_NAME,
  PLACE_HOLDER_MESSAGES,
} from "../constants";

// Create Ollama client
const ollama = new Ollama({
  host: HOST,
});

export const OllamaChat = () => {
  // State for conversation history - array of message objects
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Prompt chat with info about me
    handleInitalChat();
  }, []);

  // Function to scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendPrefixedMessage = (fixedResponse) => {
    // Prefixed responses
    // Add user message to the chat
    const userMessage = {
      role: "user",
      content: FIXED_RESPONSES[fixedResponse].question,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Add AI message to the chat
    const aiMessage = {
      role: "assistant",
      content: FIXED_RESPONSES[fixedResponse].response,
    };
    setMessages((prevMessages) => [...prevMessages, aiMessage]);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputText.trim()) return;

    // Add user message to the chat
    const userMessage = { role: "user", content: inputText };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Clear input field
    setInputText("");

    // Show loading state
    setIsLoading(true);

    try {
      // Prepare message history for the API call
      const chatHistory = [...messages, userMessage];

      // Add empty assistant message to start streaming into
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: "" },
      ]);

      // Start streaming
      const stream = await ollama.chat({
        model: MODEL_NAME,
        messages: chatHistory,
        stream: true,
      });

      // Process the stream
      for await (const chunk of stream) {
        if (chunk.message?.content) {
          setMessages((prevMessages) => {
            const newMessages = [...prevMessages];
            // Update the last message (which is the assistant's)
            const lastIndex = newMessages.length - 1;
            newMessages[lastIndex] = {
              ...newMessages[lastIndex],
              content: newMessages[lastIndex].content + chunk.message.content,
            };
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error("Error streaming from Ollama:", error);
      // Add error message
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "system",
          content: "ERROR",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Prompt model with information about me
  function handleInitalChat() {
    fetch(JoeGPTGuidelines)
      .then((r) => r.text())
      .then(async (text) => {
        const initialPrompt = {
          role: "user",
          content: text,
        };
        setMessages([initialPrompt]);

        await ollama.chat({
          model: MODEL_NAME,
          messages: [initialPrompt],
          stream: true,
        });
      });
    setInputText("");
  }

  return (
    <div className="flex-1 flex flex-col w-5/6 sm:w-3/5 mx-auto pb-4 overflow-hidden">
      {messages.length === 1 ? (
        // Initial state centered in the available space
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="w-full">
            <div className="flex justify-center">
              <div className="max-w-md">
                <img src="/images/profile-laptop.png" alt="Profile" />
              </div>
            </div>
            <div className="flex justify-center pt-2 text-text font-semibold text-[28px] text-center text-balance">
              Hi, my name is Joseph Lawler!
            </div>
            <div className="flex justify-center pt-1 pb-4 text-text text-[20px] text-center">
              Learn more about me using the chat or buttons below
            </div>
          </div>
        </div>
      ) : (
        // Messages with scrolling - ensuring it stays within bounds
        <div className="flex-1 overflow-y-auto mb-4">
          {messages.map((message, index) => {
            if (index > 0) {
              return (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.role === "user"
                      ? "text-text bg-border ml-auto"
                      : "text-text"
                  } p-3 rounded-3xl max-w-[80%] px-4 w-fit ${
                    message.role === "user" ? "ml-auto" : "mr-auto"
                  }`}
                >
                  {(() => {
                    switch (message.content) {
                      case "ERROR":
                        return (
                          <div className="flex justify-center">
                            <div className="max-w-md">
                              <img
                                src="/images/profile-shrug.jpeg"
                                alt="Error"
                              />
                            </div>
                          </div>
                        );
                      default:
                        return <Markdown>{message.content}</Markdown>;
                    }
                  })()}

                  {index === messages.length - 1 &&
                    message.role === "assistant" &&
                    isLoading && <span className="animate-pulse">▋</span>}
                </div>
              );
            }
          })}
          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Chat input container - fixed at bottom */}
      <div className="mt-auto">
        <div className="flex bg-secondary-grey rounded-3xl w-full">
          <form onSubmit={handleSendMessage} className="w-full">
            <div className="flex flex-row justify-between items-center pr-3">
              <textarea
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                  e.target.style.height = `${Math.min(
                    e.target.scrollHeight,
                    192
                  )}px`; // 192px = ~12rem
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
                className="flex justify-start pt-4 pb-2 px-4 text-text text-[14px] w-full h-fit focus:outline-0 resize-none overflow-y-auto bg-transparent"
                placeholder={
                  isLoading
                    ? "Thinking ..."
                    : PLACE_HOLDER_MESSAGES[
                        Math.floor(Math.random() * PLACE_HOLDER_MESSAGES.length)
                      ]
                }
                disabled={isLoading}
              />
              <TrashIcon
                className="size-8 stroke-border stroke-2 hover:stroke-primary-white transition ease-in-out duration-300 cursor-pointer"
                onClick={handleInitalChat}
              />
            </div>
            {/* Need to make these buttons overflow to two rows on mobile */}
            <div className="flex flex-row items-center justify-center sm:justify-between p-2 w-full flex-wrap">
              <div className="flex flex-row gap-2 justify-center">
                <button
                  type={"button"}
                  className="h-fit bg-transparent rounded-3xl px-4 py-2 border-[1px] border-border text-text text-[13px] font-semibold hover:bg-primary-white hover:text-black transition ease-in-out duration-300"
                  onClick={() => sendPrefixedMessage("experience")}
                >
                  <div className="hidden sm:block">Experience</div>
                  <div className="visible sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  type={"button"}
                  className="h-fit bg-transparent rounded-3xl px-4 py-2 border-[1px] border-border text-text text-[13px] font-semibold hover:bg-primary-white hover:text-black transition ease-in-out duration-300"
                  onClick={() => sendPrefixedMessage("patents")}
                >
                  <div className="hidden sm:block">Patents</div>
                  <div className="visible sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  type={"button"}
                  className="h-fit bg-transparent rounded-3xl px-4 py-2 border-[1px] border-border text-text text-[13px] font-semibold hover:bg-primary-white hover:text-black transition ease-in-out duration-300"
                  onClick={() => sendPrefixedMessage("skills")}
                >
                  <div className="hidden sm:block">Skills</div>
                  <div className="visible sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  type={"button"}
                  className="h-fit bg-transparent rounded-3xl px-4 py-2 border-[1px] border-border text-text text-[13px] font-semibold hover:bg-primary-white hover:text-black transition ease-in-out duration-300"
                  onClick={() => sendPrefixedMessage("education")}
                >
                  <div className="hidden sm:block">Education</div>
                  <div className="visible sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                      />
                    </svg>
                  </div>
                </button>
              </div>
              <div className="flex py-2 sm:p-0 w-full sm:w-fit">
                <button
                  type="submit"
                  className="w-full sm:w-fit flex bg-border rounded-3xl sm:rounded-full sm:aspect-square justify-center items-center p-1 sm:p-2 cursor-pointer hover:bg-primary-white transition ease-in-out duration-300"
                  disabled={isLoading}
                >
                  <div className="text-primary-white text-xl font-semibold visible sm:hidden py-2">
                    Submit
                  </div>
                  <div className="hidden sm:block">
                    <ArrowUpIcon className="size-6 stroke-secondary-grey stroke-3" />
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
