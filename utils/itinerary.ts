import type { SavedItinerary, TripDuration } from "~/types/itinerary";

export interface ItineraryState {
    days: TripDuration;
    stopIds: string[];
}

export const VALID_DURATIONS: readonly TripDuration[] = [1, 3, 5];

export const isTripDuration = (value: number): value is TripDuration => (
    VALID_DURATIONS.includes(value as TripDuration)
);

export const normalizeStopIds = (
    ids: readonly string[],
    availableIds: ReadonlySet<string>,
) => [...new Set(ids)].filter((id) => availableIds.has(id)).slice(0, 5);

export const parseSharedItinerary = (
    durationValue: unknown,
    stopValue: unknown,
    availableIds: ReadonlySet<string>,
): ItineraryState | null => {
    const duration = Number(durationValue);
    if (typeof stopValue !== "string") return null;

    const rawStops = stopValue ? stopValue.split(",") : [];
    const stopIds = normalizeStopIds(rawStops, availableIds);

    if (!isTripDuration(duration)) return null;
    return { days: duration, stopIds };
};

export const parseSavedItinerary = (
    rawValue: string,
    destinationId: string,
    availableIds: ReadonlySet<string>,
): ItineraryState | null => {
    try {
        const saved = JSON.parse(rawValue) as Partial<SavedItinerary>;
        if (
            saved.version !== 1
            || saved.destinationId !== destinationId
            || typeof saved.days !== "number"
            || !isTripDuration(saved.days)
            || !Array.isArray(saved.stopIds)
        ) return null;

        const stringIds = saved.stopIds.filter((id): id is string => typeof id === "string");
        const stopIds = normalizeStopIds(stringIds, availableIds);
        return { days: saved.days, stopIds };
    } catch {
        return null;
    }
};

export const reorderStopIds = (
    ids: readonly string[],
    index: number,
    direction: -1 | 1,
) => {
    const nextIndex = index + direction;
    if (index < 0 || index >= ids.length || nextIndex < 0 || nextIndex >= ids.length) {
        return [...ids];
    }

    const reordered = [...ids];
    [reordered[index], reordered[nextIndex]] = [reordered[nextIndex]!, reordered[index]!];
    return reordered;
};
