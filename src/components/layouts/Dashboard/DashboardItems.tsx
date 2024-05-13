import { FaHome } from "react-icons/fa";
import { MdDashboard, MdDesignServices, MdCreate } from "react-icons/md";

export const dashboardItems = [
  {
    label: "Home",
    link: "/",
    icon: <FaHome />,
  },
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    label: "Create Supply",
    link: "create-supply",
    icon: <MdCreate />,
  },
  {
    label: "All Supplies",
    link: "supplies",
    icon: <MdDesignServices />,
  },
];
