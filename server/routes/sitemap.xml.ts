import { articles } from "../../data/articles";
import { destinations } from "../../data/destinations";
import { toSiteUrl } from "../../utils/site";

const staticRoutes = ["", "blog", "destinations", "about", "contact"];
const routes = [
    ...staticRoutes,
    ...articles.map(({ slug }) => `blog/${slug}`),
    ...destinations.map(({ id }) => `destinations/${id}`),
];
const localizedRoutes = [...routes, ...routes.map((route) => `en/${route}`.replace(/\/$/, ""))];

export default defineEventHandler((event) => {
    setHeader(event, "content-type", "application/xml; charset=UTF-8");

    const urls = localizedRoutes.map((route) => `  <url><loc>${toSiteUrl(route)}</loc></url>`).join("\n");
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
});
