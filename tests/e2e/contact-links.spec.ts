import { expect, test } from "@playwright/test";

test("contact actions are not covered by the full-screen header", async ({ page }) => {
    await page.goto("post/contacto");

    for (const name of ["Ver perfil de Kevin", "Proponer un destino"]) {
        const link = page.getByRole("link", { name });
        await expect(link).toBeVisible();

        const topmostHref = await link.evaluate((element) => {
            const rect = element.getBoundingClientRect();
            const topmostElement = document.elementFromPoint(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2,
            );
            return topmostElement?.closest("a")?.getAttribute("href");
        });

        await expect(link).toHaveAttribute("href", topmostHref ?? "");
    }
});
