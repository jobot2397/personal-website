import { Header } from "./components/Header";
import OllamaChat from "./components/test";

export const App = () => {
    return (
        <div className="h-screen w-screen bg-primary-grey p-4 flex flex-col overflow-hidden">
            <Header />
            <OllamaChat/>
        </div>
    );
}