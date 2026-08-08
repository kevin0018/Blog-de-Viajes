import {expect, test} from "@playwright/test";

test("serves a complete English route with localized navigation and content", async ({page}) => {
    await page.goto("/en/destinations/london");

    await expect(page.locator("html")).toHaveAttribute("lang", "en-GB");
    await expect(page.getByRole("heading", {name: "London", exact: true})).toBeVisible();
    await expect(page.getByRole("heading", {name: "Design your escape to London"})).toBeVisible();
    await expect(page.getByRole("link", {name: "Back to destinations"})).toHaveAttribute(
        "href",
        "/Blog-de-Viajes/en/destinations",
    );
});

test("switches language without losing the current page", async ({page}) => {
    await page.setViewportSize({width: 390, height: 844});
    await page.goto("/blog/pack-light");
    await page.getByRole("button", {name: "Abrir o cerrar la navegación"}).click();
    await page.getByRole("link", {name: "View in English"}).first().click();

    await expect(page).toHaveURL(/\/en\/blog\/pack-light$/);
    await expect(page.getByRole("heading", {name: "Pack light for any city break"})).toBeVisible();
    await expect(page.locator("html")).toHaveAttribute("lang", "en-GB");
});

test("redirects legacy Spanish URLs to their English canonical paths", async ({page}) => {
    await page.goto("/post/destinos/londres");
    await expect(page).toHaveURL(/\/destinations\/london$/);
    await expect(page.getByRole("heading", {name: "Londres", exact: true})).toBeVisible();
});

test("keeps key mobile pages within the viewport", async ({page}) => {
    await page.setViewportSize({width: 390, height: 844});

    for (const route of ["/", "/destinations", "/blog", "/about", "/contact"]) {
        await page.goto(route);
        const widths = await page.evaluate(() => ({
            client: document.documentElement.clientWidth,
            scroll: document.documentElement.scrollWidth,
        }));
        expect(widths.scroll, route).toBe(widths.client);
    }
});

test("uses the same touch-friendly navigation from the sticky header", async ({page}) => {
    await page.setViewportSize({width: 390, height: 844});
    await page.context().addCookies([{
        name: "travel_blog_locale",
        value: "es",
        url: "http://127.0.0.1:3000",
    }]);
    await page.goto("/");
    await page.evaluate(() => window.scrollTo(0, 900));
    await expect(page.locator("header.fixed")).toBeVisible();

    await page.locator("header.fixed").getByRole("button", {name: "Abrir o cerrar la navegación"}).click();
    const panel = page.locator("#mobile-navigation");
    await expect(panel).toBeVisible();
    await expect(page.getByRole("button", {name: "Cerrar navegación"}).last()).toBeFocused();
    await expect(panel.getByRole("link")).toHaveCount(5);

    const targets = await panel.getByRole("link").evaluateAll((links) => links.map((link) => link.getBoundingClientRect().height));
    expect(targets.every((height) => height >= 56)).toBe(true);
    expect(await page.evaluate(() => document.body.style.overflow)).toBe("hidden");

    await page.getByRole("button", {name: "Cerrar navegación"}).last().click();
    await expect(panel).toBeHidden();
    expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
});
