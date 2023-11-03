import home from "@/assets/sidebar/home.svg";
import cart from "@/assets/sidebar/cart.svg";
import search from "@/assets/sidebar/search.svg";
import tests from "@/assets/sidebar/tests.svg";
import results from "@/assets/sidebar/results.svg";

export const header = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: home,
  },
  {
    id: 2,
    title: "Guruhlar",
    link: "/groups",
    icon: cart,
  },
  {
    id: 3,
    title: "O'quvchilar",
    link: "/students",
    icon: search,
  },
  {
    id: 4,
    title: "Testlar",
    link: "/tests",
    icon: tests,
  },
  {
    id: 5,
    title: "Natijalar",
    link: "/results",
    icon: results,
  },
];
