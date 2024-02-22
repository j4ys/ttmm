import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing.page";
import SignInPage from "../pages/sign-in.page";

const routes = [
  {
    path: "",
    Component: LandingPage,
  },
  {
    path: "singin",
    Component: SignInPage,
  },
];

const router = createBrowserRouter(routes);

export default router;
