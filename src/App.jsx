import { Header } from "./components/Header";
import { OllamaChat } from "./components/OllamaChat";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
export default function App() {
  return (
    <div className="h-screen w-screen bg-primary-grey p-4 flex flex-col overflow-hidden">
      <Header />
      <OllamaChat />
    </div>
  );
}
