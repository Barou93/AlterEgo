import React from "react";
import HomeIcon from ".././styles/assets/icons/home.svg";
import ArticleIcon from ".././styles/assets/icons/article.svg";
import MessageIcon from ".././styles/assets/icons/message.svg";
import ProfileIcon from ".././styles/assets/icons/profil.svg";

export const SidebarData = [
   {
      title: "Dashboard",
      path: "/admin/dashboard",
      class: "sidebar__icon home",
      icon: HomeIcon,
   },
   {
      title: "Articles",
      path: "/admin/article",
      class: "sidebar__icon article",
      icon: ArticleIcon,
   },
   {
      title: "Messages",
      path: "/admin/message",
      class: "sidebar__icon message",
      icon: MessageIcon,
   },

   {
      title: "Profil",
      path: "/admin/profil",
      class: "sidebar__icon message",
      icon: ProfileIcon,
   },
];
