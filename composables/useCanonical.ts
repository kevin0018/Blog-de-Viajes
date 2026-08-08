import { toSiteUrl } from "~/utils/site";

export const useCanonical = () => {
    const route = useRoute();

    useHead(() => ({
        link: [
            { rel: "canonical", href: toSiteUrl(route.path) },
        ],
    }));
};
