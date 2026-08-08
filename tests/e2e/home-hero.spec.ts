import { expect, test } from "@playwright/test";

test("introduces the travel planner without overflowing on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Traza el viaje antes de salir." })).toBeVisible();
    await expect(page.getByRole("link", { name: "Empezar una ruta" })).toHaveAttribute(
        "href",
        "/Blog-de-Viajes/post/destinos",
    );

    const viewport = await page.evaluate(() => ({
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(viewport.scrollWidth).toBe(viewport.clientWidth);
});

test("keeps the home experience still when reduced motion is requested", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    const animationName = await page.locator(".hero-line").first().evaluate(
        (element) => getComputedStyle(element).animationName,
    );
    const routeOffset = await page.locator(".route-path").evaluate(
        (element) => getComputedStyle(element).strokeDashoffset,
    );

    expect(animationName).toBe("none");
    expect(routeOffset).toBe("0px");
});

test("does not reset a manual scroll after opening the travel journal", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Leer el cuaderno" }).click();
    await expect(page).toHaveURL(/\/post\/blog$/);
    await expect(page.getByRole("heading", { name: "Antes de cerrar la maleta" })).toBeVisible();

    await page.evaluate(() => window.scrollTo(0, 600));
    await page.waitForTimeout(500);

    expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(500);
});
