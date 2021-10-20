import DailyAttendance from "./pages/DailyAttendance";
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
    component: DailyAttendance,
    path: "/daily-attendance",
    exact: true,
  },
];
