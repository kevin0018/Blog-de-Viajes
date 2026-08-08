import type { ItineraryStop } from "./itinerary";

export interface Destination {
    id: string;
    nombre: string;
    pais: string;
    imagen: string;
    alt: string;
    posicionImagen: string;
    descripcion: string;
    autor: string;
    destacado: boolean;
    layout: string;
    estancia: string;
    mejorEpoca: string;
    planes: readonly string[];
    stops: readonly ItineraryStop[];
    creditoAutorUrl: string;
    creditoUnsplashUrl: string;
}
