export const SITE_URL = "https://kevin0018.github.io/Blog-de-Viajes/";

export const toSiteUrl = (path = "") => new URL(path.replace(/^\//, ""), SITE_URL).toString();
