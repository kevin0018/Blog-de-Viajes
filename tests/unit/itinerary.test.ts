import { describe, expect, it } from "vitest";
import {
    normalizeStopIds,
    parseSavedItinerary,
    parseSharedItinerary,
    reorderStopIds,
} from "~/utils/itinerary";

const availableIds = new Set(["one", "two", "three", "four", "five", "six"]);

describe("itinerary utilities", () => {
    it("normalizes duplicate and unavailable stop ids", () => {
        expect(normalizeStopIds(["one", "missing", "one", "two"], availableIds)).toEqual(["one", "two"]);
        expect(normalizeStopIds(["one", "two", "three", "four", "five", "six"], availableIds)).toHaveLength(5);
    });

    it("parses valid share parameters and rejects invalid durations", () => {
        expect(parseSharedItinerary("5", "two,one", availableIds)).toEqual({ days: 5, stopIds: ["two", "one"] });
        expect(parseSharedItinerary("2", "one,two", availableIds)).toBeNull();
        expect(parseSharedItinerary("3", "unknown", availableIds)).toEqual({ days: 3, stopIds: [] });
        expect(parseSharedItinerary("3", undefined, availableIds)).toBeNull();
    });

    it("accepts only the current persisted-state schema and destination", () => {
        const saved = JSON.stringify({
            version: 1,
            destinationId: "londres",
            days: 3,
            stopIds: ["three", "one"],
            updatedAt: "2026-08-08T10:00:00.000Z",
        });

        expect(parseSavedItinerary(saved, "londres", availableIds)).toEqual({ days: 3, stopIds: ["three", "one"] });
        expect(parseSavedItinerary(saved, "paris", availableIds)).toBeNull();
        expect(parseSavedItinerary("not-json", "londres", availableIds)).toBeNull();
    });

    it("reorders stops without mutating the source or crossing boundaries", () => {
        const source = ["one", "two", "three"];
        expect(reorderStopIds(source, 1, -1)).toEqual(["two", "one", "three"]);
        expect(reorderStopIds(source, 0, -1)).toEqual(source);
        expect(source).toEqual(["one", "two", "three"]);
    });
});
