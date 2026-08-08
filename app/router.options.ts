import type { RouterScrollBehavior } from "vue-router";

const hashOffset = (hash: string) => {
    if (!import.meta.client) return 0;

    try {
        const element = document.querySelector(hash);
        if (!element) return 0;

        return Number.parseFloat(getComputedStyle(element).scrollMarginTop) || 0;
    } catch {
        return 0;
    }
};

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
    if (to.path === from.path) {
        if (from.hash && !to.hash) return { left: 0, top: 0 };
        if (to.hash) return { el: to.hash, top: hashOffset(to.hash), behavior: "smooth" };
        return false;
    }

    if (to.meta.scrollToTop === false) return false;
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, top: hashOffset(to.hash), behavior: "smooth" };

    // Nuxt waits for page:loading:end by default. Returning synchronously keeps
    // a late loading hook from overriding a scroll the visitor has already made.
    return { left: 0, top: 0 };
};

export default { scrollBehavior };
