import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import posthog from "posthog-js";
import { PostHogProvider } from 'posthog-js/react'

// Setup posthog
posthog.init(import.meta.env.VITE_REACT_APP_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_REACT_APP_PUBLIC_POSTHOG_HOST,
});

console.log(import.meta.env.VITE_REACT_APP_PUBLIC_POSTHOG_HOST)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </StrictMode>
);
