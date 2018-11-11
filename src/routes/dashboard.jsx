// @material-ui/icons
import Home from "@material-ui/icons/Home";
import Info from "@material-ui/icons/Info";

// core components/views
import AboutUsPage from "views/AboutUs/AboutUs.jsx";
import HomePage from "views/Home/Home.jsx";

const dashboardRoutes = [
  {
    path: "/home",
    sidebarName: "Home",
    navbarName: "Home",
    icon: Home,
    component: HomePage
  },
  {
    path: "/aboutus",
    sidebarName: "About Us",
    navbarName: "About Us",
    icon: Info,
    component: AboutUsPage
  },
  { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

export default dashboardRoutes;
