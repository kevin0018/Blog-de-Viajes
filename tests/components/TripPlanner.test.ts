import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";
import TripPlanner from "~/components/TripPlanner.vue";
import { destinations } from "~/data/destinations";

describe("TripPlanner", () => {
    it("renders the destination plan and lets the user change its duration", async () => {
        const wrapper = await mountSuspended(TripPlanner, {
            props: { destination: destinations[3] },
        });

        expect(wrapper.text()).toContain("Diseña tu escapada a Londres");
        expect(wrapper.text()).toContain("3 paradas · 3 días");

        const fiveDaysButton = wrapper.findAll("button").find((button) => button.text().includes("5 días"));
        expect(fiveDaysButton).toBeDefined();
        await fiveDaysButton!.trigger("click");

        expect(wrapper.text()).toContain("5 paradas · 5 días");
    });
});
