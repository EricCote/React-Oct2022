import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Container } from "react-bootstrap";
import Menu from "./Menu";
import Home from "./home/Home";
import About from "./about/About";
import Compteur from "./compteur/Compteur";
import Evenements from "./evenements/Evenements";
import Contacts from "./contacts/Contacts";

import "./custom.scss";

export function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <>
      <Menu />
      <Container className="mt-5">
        <Outlet />
      </Container>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "compteur", element: <Compteur init={5} /> },
      { path: "evenements", element: <Evenements /> },
      { path: "contacts", element: <Contacts /> },
    ],
  },
]);
