import { ChatPrompt } from "./components/ChatPrompt";
import { ChatResponse } from "./components/ChatResponse";
import { Header } from "./components/Header";
import OllamaChat from "./components/test";

export const App = () => {

//  can change to items end when I want to move it to the bottom

    return (
        <div className="h-screen w-screen bg-primary-grey p-4 overflow-hidden flex flex-col">
            <Header />
            {/* <div className="h-full overflow-y-auto">
            <ChatResponse
                questionText="Questions"
                responseText="Response"
            />
            </div> */}
            {/* <div className="flex-1 flex justify-center items-center mb-[50%]">
                <ChatPrompt enableGreeting={true}/>
            </div> */}
            <OllamaChat/>
        </div>
    );
}