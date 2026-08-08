import type { ItineraryStop, SavedItinerary, TripDuration } from "~/types/itinerary";
import {
    isTripDuration,
    normalizeStopIds,
    parseSavedItinerary,
    parseSharedItinerary,
    reorderStopIds,
} from "~/utils/itinerary";

const STORAGE_PREFIX = "blog-viajes:itinerary:";

export const useItinerary = (
    destinationId: string,
    availableStops: readonly ItineraryStop[],
) => {
    const route = useRoute();
    const router = useRouter();
    const days = ref<TripDuration>(3);
    const selectedStopIds = ref<string[]>(availableStops.slice(0, 3).map(({ id }) => id));
    const ready = ref(false);
    const shareStatus = ref<"idle" | "copied" | "error">("idle");

    const availableIds = new Set(availableStops.map(({ id }) => id));
    const selectedStops = computed(() => selectedStopIds.value.flatMap((id) => {
        const stop = availableStops.find((item) => item.id === id);
        return stop ? [stop] : [];
    }));
    const suggestedStops = computed(() => availableStops.filter(({ id }) => !selectedStopIds.value.includes(id)));

    const applyState = (duration: number, stopIds: readonly string[]) => {
        if (isTripDuration(duration)) {
            days.value = duration;
        }

        const validIds = normalizeStopIds(stopIds, availableIds);
        selectedStopIds.value = validIds;
    };

    const readSharedState = () => {
        const shared = parseSharedItinerary(route.query.dias, route.query.paradas, availableIds);
        if (!shared) return false;
        applyState(shared.days, shared.stopIds);
        return true;
    };

    const readSavedState = () => {
        const rawValue = localStorage.getItem(`${STORAGE_PREFIX}${destinationId}`);
        if (!rawValue) return;

        const saved = parseSavedItinerary(rawValue, destinationId, availableIds);
        if (saved) {
            applyState(saved.days, saved.stopIds);
        } else {
            localStorage.removeItem(`${STORAGE_PREFIX}${destinationId}`);
        }
    };

    const saveState = () => {
        const saved: SavedItinerary = {
            version: 1,
            destinationId,
            days: days.value,
            stopIds: selectedStopIds.value,
            updatedAt: new Date().toISOString(),
        };
        localStorage.setItem(`${STORAGE_PREFIX}${destinationId}`, JSON.stringify(saved));
    };

    const setDays = (duration: TripDuration) => {
        days.value = duration;
        const targetSize = Math.min(duration, availableStops.length);

        if (selectedStopIds.value.length < targetSize) {
            const additions = suggestedStops.value.slice(0, targetSize - selectedStopIds.value.length).map(({ id }) => id);
            selectedStopIds.value = [...selectedStopIds.value, ...additions];
        }
    };

    const addStop = (id: string) => {
        if (availableIds.has(id) && !selectedStopIds.value.includes(id)) {
            selectedStopIds.value = [...selectedStopIds.value, id].slice(0, 5);
        }
    };

    const removeStop = (id: string) => {
        selectedStopIds.value = selectedStopIds.value.filter((stopId) => stopId !== id);
    };

    const moveStop = (index: number, direction: -1 | 1) => {
        selectedStopIds.value = reorderStopIds(selectedStopIds.value, index, direction);
    };

    const resetItinerary = () => {
        days.value = 3;
        selectedStopIds.value = availableStops.slice(0, 3).map(({ id }) => id);
    };

    const shareItinerary = async () => {
        shareStatus.value = "idle";
        const query = {
            ...route.query,
            dias: String(days.value),
            paradas: selectedStopIds.value.join(","),
        };

        await router.replace({ query });

        try {
            await navigator.clipboard.writeText(window.location.href);
            shareStatus.value = "copied";
        } catch {
            shareStatus.value = "error";
        }
    };

    onMounted(() => {
        if (!readSharedState()) {
            readSavedState();
        }
        ready.value = true;
    });

    watch([days, selectedStopIds], () => {
        if (!ready.value) return;
        saveState();

        if (typeof route.query.dias === "string" || typeof route.query.paradas === "string") {
            void router.replace({
                query: {
                    ...route.query,
                    dias: String(days.value),
                    paradas: selectedStopIds.value.join(","),
                },
            });
        }
    }, { deep: true });

    return {
        days: readonly(days),
        selectedStops,
        suggestedStops,
        shareStatus: readonly(shareStatus),
        setDays,
        addStop,
        removeStop,
        moveStop,
        resetItinerary,
        shareItinerary,
    };
};
