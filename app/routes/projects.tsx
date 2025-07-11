import type { Route } from "./+types/home";
import ProjectsComponent from "~/pages/projects/project";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Các dự án" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Projects() {
  return <ProjectsComponent />;
}
