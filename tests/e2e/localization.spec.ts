import {expect, test} from "@playwright/test";

test("serves a complete English route with localized navigation and content", async ({page}) => {
    await page.goto("/en/post/destinos/londres");

    await expect(page.locator("html")).toHaveAttribute("lang", "en-GB");
    await expect(page.getByRole("heading", {name: "London", exact: true})).toBeVisible();
    await expect(page.getByRole("heading", {name: "Design your escape to London"})).toBeVisible();
    await expect(page.getByRole("link", {name: "Back to destinations"})).toHaveAttribute(
        "href",
        "/Blog-de-Viajes/en/post/destinos",
    );
});

test("switches language without losing the current page", async ({page}) => {
    await page.setViewportSize({width: 390, height: 844});
    await page.goto("/post/blog/empacar-ligero");
    await page.getByRole("button", {name: "Abrir o cerrar la navegación"}).click();
    await page.getByRole("link", {name: "View in English"}).first().click();

    await expect(page).toHaveURL(/\/en\/post\/blog\/empacar-ligero$/);
    await expect(page.getByRole("heading", {name: "Pack light for any city break"})).toBeVisible();
    await expect(page.locator("html")).toHaveAttribute("lang", "en-GB");
});

test("keeps key mobile pages within the viewport", async ({page}) => {
    await page.setViewportSize({width: 390, height: 844});

    for (const route of ["/", "/post/destinos", "/post/blog", "/post/about", "/post/contacto"]) {
        await page.goto(route);
        const widths = await page.evaluate(() => ({
            client: document.documentElement.clientWidth,
            scroll: document.documentElement.scrollWidth,
        }));
        expect(widths.scroll, route).toBe(widths.client);
    }
});
