import PickUp from "./pages/PickUp";
import Home from "./pages/Home";
import PersonnelList from "./pages/PersonnelList";

export const tempPublicRoutes = [
  {
    component: Home,
    path: "/",
    exact: true,
  },
  {
    component: PersonnelList,
    path: "/personnel-list",
    exact: true,
  },
  {
    component: PickUp,
    path: "/pickup",
    exact: true,
  },
];
