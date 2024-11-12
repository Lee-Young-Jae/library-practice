import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YosoThemeProvider } from "yoso-ui";

import MainLayout from "./layout/mainLayout.tsx";
import { NAVIGATOR_LIST } from "./constance";
import "./index.css";

const queryClient = new QueryClient();

async function prepare() {
  if (import.meta.env.MODE === "development") {
    const { worker } = await import("./mocks/browser");
    // 서비스 워커 시작 (비동기)
    await worker.start();
  }
}

prepare().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <YosoThemeProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                {NAVIGATOR_LIST.map(({ path, element: Element }) => (
                  <Route key={path} path={path} element={<Element />} />
                ))}
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </YosoThemeProvider>
    </StrictMode>
  );
});
