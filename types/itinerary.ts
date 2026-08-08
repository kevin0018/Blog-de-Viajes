export type TripDuration = 1 | 3 | 5;

export interface ItineraryStop {
    id: string;
    title: string;
    description: string;
}

export interface SavedItinerary {
    version: 1;
    destinationId: string;
    days: TripDuration;
    stopIds: string[];
    updatedAt: string;
}
