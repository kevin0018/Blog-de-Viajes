import type { ItineraryStop } from "./itinerary";

export type TravelBudget = "contenido" | "medio" | "alto";
export type TravelSeason = "primavera" | "verano" | "otono" | "invierno";
export type TravelStyle = "cultura" | "gastronomia" | "urbano" | "costa";

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
    idealDays: number;
    mejorEpoca: string;
    seasons: readonly TravelSeason[];
    budget: TravelBudget;
    styles: readonly TravelStyle[];
    planes: readonly string[];
    stops: readonly ItineraryStop[];
    creditoAutorUrl: string;
    creditoUnsplashUrl: string;
}
