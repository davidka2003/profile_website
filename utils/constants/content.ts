import { AboutMe } from "@components/AboutMe";
import { Companies } from "@components/Companies";
import { ContactMe } from "@components/ContactMe";
import { FindMe } from "@components/FindMe";
import { Projects } from "@components/Projects";
import { Stack } from "@components/Stack";
import { Technologies } from "@components/Technologies";
import { FC, ReactNode } from "react";

export const content: { page: string; component: FC }[] = [
  {
    page: "About me",
    component: AboutMe,
  },
  {
    page: "Companies I've worked in",
    component: Companies,
  },
  {
    page: "Projects",
    component: Projects,
  },
  {
    page: "Tech stack",
    component: Stack,
  },
  {
    page: "Technologies",
    component: Technologies,
  },
  {
    page: "Where u can find me?",
    component: FindMe,
  },
  {
    page: "Contact me",
    component: ContactMe,
  },
];
