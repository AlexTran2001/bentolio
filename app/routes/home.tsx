import type { Route } from "./+types/home";
import { Homepage } from "~/pages/homepage/homepage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alex Tran" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Homepage />;
}
