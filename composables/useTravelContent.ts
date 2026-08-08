import {articles as spanishArticles} from "~/data/articles";
import {destinations as spanishDestinations} from "~/data/destinations";
import {englishArticles, englishDestinations} from "~/data/content.en";

export const useTravelContent = () => {
    const {locale} = useI18n();
    const articles = computed(() => locale.value === "en" ? englishArticles : spanishArticles);
    const destinations = computed(() => locale.value === "en" ? englishDestinations : spanishDestinations);
    const homeIds = new Set(["london", "rome", "paris", "new-york"]);

    return {
        articles,
        destinations,
        homeDestinations: computed(() => destinations.value.filter(({id}) => homeIds.has(id))),
        findArticle: (slug: string) => articles.value.find((article) => article.slug === slug),
        findDestination: (slug: string) => destinations.value.find((destination) => destination.id === slug),
    };
};
