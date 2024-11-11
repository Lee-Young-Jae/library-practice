import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/mainLayout.tsx";
import { NAVIGATOR_LIST } from "./constance";
import { YosoThemeProvider } from "yoso-ui";

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {NAVIGATOR_LIST.map(({ path, element: Element }) => (
                <Route key={path} path={path} element={<Element />} />
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
      </YosoThemeProvider>
    </StrictMode>
  );
});
