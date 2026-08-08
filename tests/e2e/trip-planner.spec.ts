import { expect, test } from "@playwright/test";

test("builds and restores a shared London itinerary", async ({ page }) => {
    await page.goto("destinations/london?dias=5&paradas=westminster,greenwich");

    const planner = page.getByRole("heading", { name: "Diseña tu escapada a Londres" }).locator("../..");
    await expect(planner).toContainText("2 paradas · 5 días");
    await expect(planner).toContainText("Westminster");
    await expect(planner).toContainText("Greenwich");

    await planner.getByRole("button", { name: "Borough Market" }).click();
    await expect(planner).toContainText("3 paradas · 5 días");
    await expect.poll(() => new URL(page.url()).searchParams.get("paradas")).toContain("borough-market");

    await page.reload();
    await expect(page.getByText("3 paradas · 5 días")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Borough Market" })).toBeVisible();
});
