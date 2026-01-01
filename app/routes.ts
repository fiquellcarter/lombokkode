import { index, route, type RouteConfig } from "@react-router/dev/routes";

const config: RouteConfig = [index("routes/home.tsx"), route("ui", "routes/ui.tsx")];

export default config;
