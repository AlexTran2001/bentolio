import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("ve-toi", "routes/aboutme.tsx"),
  route("cac-du-an", "routes/projects.tsx"),
  route("lien-he", "routes/contact.tsx"),

] satisfies RouteConfig;
