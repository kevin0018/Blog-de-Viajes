import { articles } from "../../data/articles";
import { destinations } from "../../data/destinations";
import { toSiteUrl } from "../../utils/site";

const staticRoutes = ["", "post/blog", "post/destinos", "post/about", "post/contacto"];
const routes = [
    ...staticRoutes,
    ...articles.map(({ slug }) => `post/blog/${slug}`),
    ...destinations.map(({ id }) => `post/destinos/${id}`),
];

export default defineEventHandler((event) => {
    setHeader(event, "content-type", "application/xml; charset=UTF-8");

    const urls = routes.map((route) => `  <url><loc>${toSiteUrl(route)}</loc></url>`).join("\n");
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
});
