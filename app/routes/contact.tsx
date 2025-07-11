import type { Route } from "./+types/home";
import Contact from "~/pages/contact/contact";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact" },
    { name: "description", content: "Get in touch with us!" },
  ];
}

export default function ContactPage() {
  return <Contact />;
}
