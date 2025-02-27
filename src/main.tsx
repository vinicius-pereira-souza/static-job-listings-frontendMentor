import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./ui/index.css";
import App from "./app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TagsContextProvider from "./context/tagsContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TagsContextProvider>
        <App />
      </TagsContextProvider>
    </QueryClientProvider>
  </StrictMode>,
);
