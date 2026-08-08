import type { ItineraryStop, SavedItinerary, TripDuration } from "~/types/itinerary";

const STORAGE_PREFIX = "blog-viajes:itinerary:";
const VALID_DURATIONS: readonly TripDuration[] = [1, 3, 5];

const isTripDuration = (value: number): value is TripDuration => (
    VALID_DURATIONS.includes(value as TripDuration)
);

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

    const normalizeStopIds = (ids: readonly string[]) => (
        [...new Set(ids)].filter((id) => availableIds.has(id)).slice(0, 5)
    );

    const applyState = (duration: number, stopIds: readonly string[]) => {
        if (isTripDuration(duration)) {
            days.value = duration;
        }

        const validIds = normalizeStopIds(stopIds);
        if (validIds.length > 0) {
            selectedStopIds.value = validIds;
        }
    };

    const readSharedState = () => {
        const duration = Number(route.query.dias);
        const stops = typeof route.query.paradas === "string"
            ? route.query.paradas.split(",")
            : [];

        if (isTripDuration(duration) && stops.length > 0) {
            applyState(duration, stops);
            return true;
        }

        return false;
    };

    const readSavedState = () => {
        const rawValue = localStorage.getItem(`${STORAGE_PREFIX}${destinationId}`);
        if (!rawValue) return;

        try {
            const saved = JSON.parse(rawValue) as Partial<SavedItinerary>;
            if (
                saved.version === 1
                && saved.destinationId === destinationId
                && typeof saved.days === "number"
                && Array.isArray(saved.stopIds)
            ) {
                applyState(saved.days, saved.stopIds.filter((id): id is string => typeof id === "string"));
            }
        } catch {
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
        const nextIndex = index + direction;
        if (nextIndex < 0 || nextIndex >= selectedStopIds.value.length) return;

        const reordered = [...selectedStopIds.value];
        [reordered[index], reordered[nextIndex]] = [reordered[nextIndex]!, reordered[index]!];
        selectedStopIds.value = reordered;
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
        if (ready.value) saveState();
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
