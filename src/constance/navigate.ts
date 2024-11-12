import App from "../App.tsx";
import HookForm from "../pages/hook-form.tsx";
import TanstackQuery from "../pages/tanstack-query.tsx";

export const NAVIGATOR_LIST = [
  { label: "App", path: "/", element: App },
  {
    label: "React-Hook-Form",
    path: "/react-hook-form",
    element: HookForm,
  },
  {
    label: "Tanstack Query",
    path: "/tanstack-query",
    element: TanstackQuery,
  },
] as const;
