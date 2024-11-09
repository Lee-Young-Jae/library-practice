import App from "../App.tsx";
import HookForm from "../pages/hook-form.tsx";

export const NAVIGATOR_LIST = [
  { label: "App", path: "/", element: App },
  {
    label: "React-Hook-Form",
    path: "/react-hook-form",
    element: HookForm,
  },
] as const;
