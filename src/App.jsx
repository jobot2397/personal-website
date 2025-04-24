import posthog from "posthog-js";
import { Header } from "./components/Header";
import { OllamaChat } from "./components/OllamaChat";
import { pdfjs } from "react-pdf";

// Create pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function App() {
  posthog?.capture("App Loaded", { property: "App loaded successfully" });
  return (
    <div className="h-screen w-screen bg-primary-grey p-4 flex flex-col overflow-hidden">
      <Header />
      <OllamaChat />
    </div>
  );
}
