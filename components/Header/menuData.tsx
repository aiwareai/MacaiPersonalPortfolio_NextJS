import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
    icon: "/images/icon/home.svg",
  },
  {
    id: 2,
    title: "Portfolio",
    newTab: false,
    path: "/portfolio",
    icon: "/images/icon/bag.svg",
  },
  {
    id: 3,
    title: "Services",
    newTab: true,
    path: "#",
    icon: "/images/icon/phone.svg",
    submenu: [
      {
        id: 31,
        title: "Web & Ecommerce",
        newTab: true,
        path: "/apps/web",
      },
      {
        id: 32,
        title: "AI Assistants & Agents",
        newTab: true,
        path: "/apps/support-chatbot",
      },
      {
        id: 33,
        title: "Automations",
        newTab: true,
        path: "/apps/automation",
      },
      {
        id: 34,
        title: "Generative AI",
        newTab: true,
        path: "/generativeai",
      },
      // {
      //   id: 34,
      //   title: "Sign In",
      //   newTab: false,
      //   path: "/auth/signin",
      // },
      // {
      //   id: 35,
      //   title: "Sign Up",
      //   newTab: false,
      //   path: "/auth/signup",
      // },
    ],
  },

  {
    id: 4,
    title: "Contact",
    newTab: false,
    path: "/contact",
    icon: "/images/icon/phone.svg",
  },
];

export default menuData;
