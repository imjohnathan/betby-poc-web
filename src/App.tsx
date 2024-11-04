import {
  createHashRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import indexStyles from "@/index.scss?inline";
import appStyles from "@/App.scss?inline";

const Subscription = lazy(() => import("@/components/Subscription"));
const Home = lazy(() => import("@/components/Home"));

export interface AppProps {
  username: string;
  shouldDisplayMentions?: boolean;
}

const Layout = () => {
  return <div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/subscription">Subscription</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
    <Outlet />
  </div>;
};

function App(props: AppProps) {
  const { username, shouldDisplayMentions } = props;
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/subscription",
          element: <Subscription shouldDisplayMentions={shouldDisplayMentions} username={username} />,
        },
        {
          path: "/about",
          element: <div>About</div>,
        },
      ]
    },
  ]);
  return <>
    <style>{indexStyles}</style>
    <style>{appStyles}</style>
    <h1>BetBy Component</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </>;
}

export default App
