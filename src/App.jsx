import { ChatPrompt } from "./components/ChatPrompt";
import { Header } from "./components/Header";

export const App = () => {

    return (
        <div className="h-screen w-screen bg-primary-grey p-4 overflow-hidden flex flex-col">
            <Header />
            <div className="flex-1 flex justify-center items-center pb-16">
                <ChatPrompt />
            </div>
        </div>
    );
}