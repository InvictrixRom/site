// @material-ui/icons
import Home from "@material-ui/icons/HomeOutlined";
import Info from "@material-ui/icons/InfoOutlined";
import People from "@material-ui/icons/PeopleOutlined";
import Downloads from "@material-ui/icons/CloudDownloadOutlined";
import Donate from "@material-ui/icons/AttachMoneyOutlined";
import Gerrit from "assets/img/icons/Gerrit.jsx";
import Jenkins from "assets/img/icons/Jenkins.jsx";

// core components/views
import AboutUsPage from "views/AboutUs/AboutUs.jsx";
import HomePage from "views/Home/Home.jsx";
import TeamPage from "views/Team/Team.jsx";
import DownloadsPage from "views/Downloads/Downloads.jsx";
import DonatePage from "views/Donate/Donate.jsx";
import GerritRedirect from "views/Redirects/GerritRedirect.jsx";
import JenkinsRedirect from "views/Redirects/JenkinsRedirect.jsx";

const dashboardRoutes = [
  {
    path: "/home",
    sidebarName: "Home",
    navbarName: "Home",
    icon: Home,
    component: HomePage
  },
  {
    path: "/downloads",
    sidebarName: "Downloads",
    navbarName: "Downloads",
    icon: Downloads,
    component: DownloadsPage
  },
  {
    path: "/aboutus",
    sidebarName: "About Us",
    navbarName: "About Us",
    icon: Info,
    component: AboutUsPage
  },
  {
    path: "/team",
    sidebarName: "Team",
    navbarName: "Team",
    icon: People,
    component: TeamPage
  },
  {
    path: "/gerrit",
    sidebarName: "Gerrit",
    navbarName: "Gerrit",
    icon: Gerrit,
    component: GerritRedirect
  },
  {
    path: "/jenkins",
    sidebarName: "Jenkins",
    navbarName: "Jenkins",
    icon: Jenkins,
    component: JenkinsRedirect
  },
  {
    path: "/donate",
    sidebarName: "Donate via PayPal",
    navbarName: "Donate",
    icon: Donate,
    component: DonatePage
  },
  { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

export default dashboardRoutes;
