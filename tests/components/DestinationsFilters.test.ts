import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";
import DestinationsPage from "~/pages/post/destinos/index.vue";

describe("destination filters", () => {
    it("shows a recoverable empty state for a combination without matches", async () => {
        const wrapper = await mountSuspended(DestinationsPage);

        expect(wrapper.text()).toContain("6 destinos encontrados");

        const budgetSelect = wrapper.findAll("select")[2]!;
        await budgetSelect.setValue("contenido");

        expect(wrapper.text()).toContain("No hay una postal con esa combinación");
        expect(wrapper.text()).toContain("0 destinos encontrados");

        await wrapper.get("button:not([disabled])").trigger("click");
        expect(wrapper.text()).toContain("6 destinos encontrados");
    });
});
