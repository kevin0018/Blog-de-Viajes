export interface ArticleSection {
    titulo: string;
    parrafos: readonly string[];
    puntos?: readonly string[];
}

export interface TravelArticle {
    slug: string;
    titulo: string;
    resumen: string;
    introduccion: string;
    categoria: string;
    imagen: string;
    alt: string;
    autor: string;
    creditoAutorUrl: string;
    creditoUnsplashUrl: string;
    secciones: readonly ArticleSection[];
}
