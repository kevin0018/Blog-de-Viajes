<template>
    <header
        ref="headerElement"
        class="relative border-b-4 border-spain-yellow shadow-lg transition-[height] duration-500"
        :class="fullScreen
            ? 'h-screen min-h-[64rem] lg:min-h-[46rem]'
            : home
                ? 'h-[88svh] min-h-[42rem] lg:min-h-[46rem]'
            : slim
                ? 'h-20'
            : compact
                ? 'h-[28vh] min-h-56 lg:h-[32vh]'
                : 'h-[50vh] min-h-80'"
    >
        <picture class="absolute inset-0">
            <source
                type="image/avif"
                :srcset="`${baseURL}assets/images/header-bg-640.avif 640w, ${baseURL}assets/images/header-bg-960.avif 960w, ${baseURL}assets/images/header-bg-1440.avif 1440w, ${baseURL}assets/images/header-bg-1920.avif 1920w`"
                sizes="100vw"
            >
            <source
                type="image/webp"
                :srcset="`${baseURL}assets/images/header-bg-640.webp 640w, ${baseURL}assets/images/header-bg-960.webp 960w, ${baseURL}assets/images/header-bg-1440.webp 1440w, ${baseURL}assets/images/header-bg-1920.webp 1920w`"
                sizes="100vw"
            >
            <img
                :src="`${baseURL}assets/images/header-bg-1920.webp`"
                alt=""
                width="1920"
                height="1144"
                fetchpriority="high"
                decoding="async"
                class="h-full w-full object-cover object-center"
            >
        </picture>
        <div
            class="absolute inset-0"
            :class="home
                ? 'bg-[linear-gradient(90deg,rgba(37,26,22,0.82)_0%,rgba(37,26,22,0.58)_48%,rgba(37,26,22,0.2)_100%)]'
                : 'bg-spain-ink/55'"
        />

        <!-- Contenido del header -->
        <div class="pointer-events-none relative z-30 flex h-full flex-col items-center">
            <!-- Menú superior para escritorio y móviles -->
            <nav
                class="pointer-events-auto absolute top-0 left-0 w-full flex justify-between items-center px-8 lg:px-16 py-4 text-white lg:text-xl font-medium">
                <!-- Menú de la izquierda -->
                <div class="hidden lg:flex space-x-8 items-center">
                    <nuxt-link :to="localePath('/post/blog')" class="hover:text-spain-yellow">{{ $t('nav.blog') }}</nuxt-link>
                    <nuxt-link :to="localePath('/post/about')" class="hover:text-spain-yellow">{{ $t('nav.about') }}</nuxt-link>
                </div>

                <!-- Logo centrado -->
                <a
                    :href="localePath('/')"
                    :aria-label="$t('nav.home')"
                    class="absolute left-1/2 top-4 -translate-x-1/2 rounded-full opacity-95 transition-opacity duration-300 hover:opacity-75 lg:top-1/2 lg:-translate-y-1/2"
                >
                    <img
                        :src="`${baseURL}assets/images/logo-viajes.svg`"
                        :alt="$t('brand')"
                        width="56"
                        height="56"
                        fetchpriority="high"
                        decoding="sync"
                        class="h-14 w-14 drop-shadow-sm"
                    >
                </a>

                <!-- Menú de la derecha -->
                <div class="hidden lg:flex space-x-8 items-center">
                    <nuxt-link :to="localePath('/post/destinos')" class="hover:text-spain-yellow">{{ $t('nav.destinations') }}</nuxt-link>
                    <nuxt-link :to="localePath('/post/contacto')" class="hover:text-spain-yellow">{{ $t('nav.contact') }}</nuxt-link>
                    <nuxt-link :to="switchLocalePath(otherLocale)" class="rounded-full border border-white/40 px-3 py-1 font-mono text-xs" :aria-label="$t('language.switchTo')">{{ otherLocale.toUpperCase() }}</nuxt-link>
                </div>

                <!-- Botón hamburguesa para móviles -->
                <button
                    ref="menuButton"
                    :aria-label="$t('nav.open')"
                    :aria-expanded="mobileMenuOpen"
                    aria-controls="mobile-navigation"
                    class="absolute right-4 top-3 flex h-12 w-12 touch-manipulation items-center justify-center rounded-full border border-white/25 bg-spain-ink/25 text-white backdrop-blur-sm active:bg-spain-ink/45 lg:hidden"
                    @click="toggleMobileMenu"
                >
                    <Icon
                        :name="mobileMenuOpen ? 'mdi:close' : 'mdi:menu'"
                        class="h-6 w-6 transition-transform duration-300"
                    />
                </button>
            </nav>

            <section
                v-if="home"
                class="home-intro flex h-full w-full items-center px-5 pb-16 pt-24 sm:px-10 lg:px-16 lg:pb-24 lg:pt-32"
                aria-labelledby="home-hero-title"
            >
                <div class="mx-auto grid w-full max-w-[90rem] items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(26rem,1.08fr)]">
                    <div class="relative z-10 max-w-3xl text-white">
                        <p class="hero-kicker font-mono text-xs font-semibold uppercase tracking-[0.22em] text-spain-yellow">
                            {{ $t('hero.kicker') }}
                        </p>
                        <h1 id="home-hero-title" class="mt-4 text-[2.85rem] font-bold leading-[0.92] sm:mt-5 sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                            <span class="hero-line block">{{ $t('hero.title1') }}</span>
                            <span class="hero-line hero-line-delayed block text-spain-yellow">{{ $t('hero.title2') }}</span>
                        </h1>
                        <p class="hero-copy mt-5 max-w-xl text-base leading-7 text-white/80 sm:mt-7 sm:text-lg sm:leading-8">
                            {{ $t('hero.copy') }}
                        </p>
                        <div class="hero-actions pointer-events-auto mt-7 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap">
                            <nuxt-link
                                :to="localePath('/post/destinos')"
                                class="inline-flex items-center gap-2 rounded-full bg-spain-yellow px-6 py-3 font-semibold text-spain-ink transition-colors hover:bg-spain-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-spain-yellow"
                            >
                                {{ $t('hero.route') }}
                                <Icon name="mdi:arrow-right" class="h-5 w-5"/>
                            </nuxt-link>
                            <nuxt-link
                                :to="localePath('/post/blog')"
                                class="inline-flex items-center rounded-full border border-white/35 px-6 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                            >
                                {{ $t('hero.journal') }}
                            </nuxt-link>
                        </div>
                    </div>

                    <div class="route-sketch relative hidden min-h-[24rem] lg:block" aria-hidden="true">
                        <svg class="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 680 420" fill="none">
                            <path
                                class="route-path"
                                pathLength="1"
                                d="M34 332C128 252 154 366 247 279C322 208 289 111 401 104C503 98 519 207 642 60"
                                stroke="currentColor"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-dasharray="8 11"
                            />
                            <circle class="route-point route-point-one" cx="34" cy="332" r="7"/>
                            <circle class="route-point route-point-two" cx="247" cy="279" r="7"/>
                            <circle class="route-point route-point-three" cx="401" cy="104" r="7"/>
                            <circle class="route-point route-point-four" cx="642" cy="60" r="10"/>
                        </svg>
                        <span class="route-label route-label-origin absolute bottom-[12%] left-0">{{ $t('hero.origin') }}</span>
                        <span class="route-label route-label-destination absolute right-0 top-0">{{ $t('hero.next') }}</span>
                        <span class="route-distance absolute bottom-[36%] right-[16%] font-mono text-xs uppercase tracking-[0.18em] text-white/60">
                            {{ $t('hero.decide') }}
                        </span>
                    </div>
                </div>

                <a
                    href="#destinos-home"
                    class="scroll-cue pointer-events-auto absolute bottom-12 left-6 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white sm:flex lg:left-16"
                >
                    <span class="flex h-9 w-6 justify-center rounded-full border border-white/35 pt-2">
                        <span class="scroll-dot h-1.5 w-1.5 rounded-full bg-spain-yellow"/>
                    </span>
                    {{ $t('hero.discover') }}
                </a>
            </section>
        </div>

        <!-- Créditos del autor -->
        <div
            v-if="!slim"
            class="absolute bottom-2 left-1/2 z-30 -translate-x-1/2 rounded-md bg-spain-ink/75 px-4 py-2 text-xs text-white">
            {{ $t('common.photoBy') }}
            <a
                href="https://unsplash.com/es/@v2osk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank"
                rel="noopener noreferrer"
                class="underline hover:text-spain-yellow"
            >
                v2osk
            </a>
            {{ $t('common.on') }}
            <a
                href="https://unsplash.com/es/fotos/foggy-mountain-summit-1Z2niiBPg5A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank"
                rel="noopener noreferrer"
                class="underline hover:text-spain-yellow"
            >
                Unsplash
            </a>
        </div>
    </header>

    <transition name="sticky-nav">
        <header
            v-if="showStickyHeader"
            class="fixed inset-x-0 top-0 z-[60] overflow-hidden border-b border-spain-yellow/70 text-white shadow-lg"
        >
            <picture class="absolute inset-0">
                <source
                    type="image/avif"
                    :srcset="`${baseURL}assets/images/header-bg-640.avif 640w, ${baseURL}assets/images/header-bg-960.avif 960w, ${baseURL}assets/images/header-bg-1440.avif 1440w, ${baseURL}assets/images/header-bg-1920.avif 1920w`"
                    sizes="100vw"
                >
                <source
                    type="image/webp"
                    :srcset="`${baseURL}assets/images/header-bg-640.webp 640w, ${baseURL}assets/images/header-bg-960.webp 960w, ${baseURL}assets/images/header-bg-1440.webp 1440w, ${baseURL}assets/images/header-bg-1920.webp 1920w`"
                    sizes="100vw"
                >
                <img
                    :src="`${baseURL}assets/images/header-bg-1920.webp`"
                    alt=""
                    width="1920"
                    height="1144"
                    decoding="async"
                    class="h-full w-full object-cover object-center"
                >
            </picture>
            <div class="absolute inset-0 bg-spain-ink/65 backdrop-blur-[2px]"/>

            <nav class="relative mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
                <nuxt-link
                    :to="localePath('/')"
                    :aria-label="$t('nav.home')"
                    class="flex items-center gap-3 transition-opacity hover:opacity-75"
                >
                    <img
                        :src="`${baseURL}assets/images/logo-viajes.svg`"
                        alt=""
                        width="40"
                        height="40"
                        class="h-10 w-10"
                    >
                    <span class="hidden font-display text-xl font-bold sm:block">{{ $t('brand') }}</span>
                </nuxt-link>

                <div class="hidden items-center gap-8 font-medium lg:flex">
                    <nuxt-link
                        v-for="link in navLinks"
                        :key="link.to"
                        :to="link.to"
                        class="transition-colors hover:text-spain-yellow"
                    >
                        {{ link.label }}
                    </nuxt-link>
                    <nuxt-link :to="switchLocalePath(otherLocale)" class="rounded-full border border-white/40 px-3 py-1 font-mono text-xs" :aria-label="$t('language.switchTo')">{{ otherLocale.toUpperCase() }}</nuxt-link>
                </div>

                <button
                    :aria-label="$t('nav.open')"
                    :aria-expanded="mobileMenuOpen"
                    aria-controls="mobile-navigation"
                    class="flex h-12 w-12 touch-manipulation items-center justify-center rounded-full transition-colors active:bg-white/15 lg:hidden"
                    @click="toggleMobileMenu"
                >
                    <Icon
                        :name="mobileMenuOpen ? 'mdi:close' : 'mdi:menu'"
                        class="h-6 w-6"
                    />
                </button>
            </nav>

        </header>
    </transition>

    <Teleport to="body">
        <transition name="mobile-sheet">
            <div
                v-if="mobileMenuOpen"
                class="fixed inset-0 z-[100] lg:hidden"
                @keydown.esc="closeMobileMenu"
            >
                <button
                    type="button"
                    class="absolute inset-0 h-full w-full bg-spain-ink/70 backdrop-blur-[3px]"
                    :aria-label="$t('nav.close')"
                    @click="closeMobileMenu"
                />

                <section
                    id="mobile-navigation"
                    ref="mobileMenuPanel"
                    class="mobile-menu-panel absolute inset-x-0 bottom-0 max-h-[92dvh] overflow-y-auto rounded-t-[2rem] border-t border-spain-sand bg-spain-paper px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3 text-spain-ink shadow-2xl"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="mobile-navigation-title"
                    @keydown.tab="trapMobileMenuFocus"
                >
                    <span class="mx-auto block h-1 w-10 rounded-full bg-spain-sand" aria-hidden="true"/>

                    <header class="mt-4 flex items-center gap-3 border-b border-spain-sand pb-5">
                        <img
                            :src="`${baseURL}assets/images/logo-viajes.svg`"
                            alt=""
                            width="44"
                            height="44"
                            class="h-11 w-11"
                        >
                        <div class="min-w-0 flex-1">
                            <p class="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-spain-red">
                                {{ $t('nav.menuKicker') }}
                            </p>
                            <h2 id="mobile-navigation-title" class="mt-1 text-2xl font-bold leading-none text-spain-wine">
                                {{ $t('nav.menuTitle') }}
                            </h2>
                        </div>
                        <button
                            ref="mobileMenuCloseButton"
                            type="button"
                            class="flex h-12 w-12 shrink-0 touch-manipulation items-center justify-center rounded-full border border-spain-sand bg-spain-surface text-spain-wine transition-colors active:bg-spain-yellow/25"
                            :aria-label="$t('nav.close')"
                            @click="closeMobileMenu"
                        >
                            <Icon name="mdi:close" class="h-6 w-6"/>
                        </button>
                    </header>

                    <nav class="mt-4" :aria-label="$t('nav.menuTitle')">
                        <ul class="grid gap-2">
                            <li v-for="link in navLinks" :key="link.to">
                                <nuxt-link
                                    :to="link.to"
                                    class="group flex min-h-[4.5rem] touch-manipulation items-center gap-4 rounded-2xl border border-spain-sand bg-spain-surface px-4 py-3 transition-[background-color,transform] active:scale-[0.985] active:bg-spain-yellow/15"
                                    @click="closeMobileMenu"
                                >
                                    <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-spain-wine text-white">
                                        <Icon :name="link.icon" class="h-6 w-6"/>
                                    </span>
                                    <span class="min-w-0 flex-1">
                                        <span class="block text-lg font-bold leading-tight text-spain-wine">{{ link.label }}</span>
                                        <span class="mt-1 block text-sm leading-5 text-spain-ink/60">{{ link.hint }}</span>
                                    </span>
                                    <Icon name="mdi:chevron-right" class="h-6 w-6 shrink-0 text-spain-red"/>
                                </nuxt-link>
                            </li>
                        </ul>
                    </nav>

                    <nuxt-link
                        :to="switchLocalePath(otherLocale)"
                        class="mt-4 flex min-h-14 touch-manipulation items-center justify-between rounded-2xl bg-spain-yellow px-5 font-semibold text-spain-ink transition-transform active:scale-[0.985]"
                        @click="closeMobileMenu"
                    >
                        <span class="inline-flex items-center gap-3">
                            <Icon name="mdi:translate" class="h-6 w-6"/>
                            {{ $t('language.switchTo') }}
                        </span>
                        <span class="font-mono text-xs uppercase tracking-[0.16em]">{{ otherLocale.toUpperCase() }}</span>
                    </nuxt-link>
                </section>
            </div>
        </transition>
    </Teleport>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";

defineProps({
    compact: {
        type: Boolean,
        default: false,
    },
    fullScreen: {
        type: Boolean,
        default: false,
    },
    home: {
        type: Boolean,
        default: false,
    },
    slim: {
        type: Boolean,
        default: false,
    },
});

// Obtén el baseURL desde la configuración del entorno
const { app: { baseURL } } = useRuntimeConfig();
const route = useRoute();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const {locale, t} = useI18n();
const otherLocale = computed(() => locale.value === "es" ? "en" : "es");

const mobileMenuOpen = ref(false);
const showStickyHeader = ref(false);
const headerElement = ref(null);
const mobileMenuCloseButton = ref(null);
const mobileMenuPanel = ref(null);
const mobileMenuTrigger = ref(null);

const navLinks = computed(() => [
    {label: t("nav.destinations"), hint: t("nav.destinationsHint"), icon: "mdi:map-marker-path", to: localePath("/post/destinos")},
    {label: t("nav.blog"), hint: t("nav.blogHint"), icon: "mdi:notebook-outline", to: localePath("/post/blog")},
    {label: t("nav.about"), hint: t("nav.aboutHint"), icon: "mdi:account-outline", to: localePath("/post/about")},
    {label: t("nav.contact"), hint: t("nav.contactHint"), icon: "mdi:message-text-outline", to: localePath("/post/contacto")},
]);

const closeMobileMenu = () => {
    mobileMenuOpen.value = false;
};

const toggleMobileMenu = (event) => {
    if (!mobileMenuOpen.value) {
        mobileMenuTrigger.value = event.currentTarget;
    }
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

const trapMobileMenuFocus = (event) => {
    const focusable = [...(mobileMenuPanel.value?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ) ?? [])];
    const first = focusable[0];
    const last = focusable.at(-1);

    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
    }
};

const updateStickyHeader = () => {
    const headerHeight = headerElement.value?.offsetHeight ?? 0;
    const shouldShow = window.scrollY > Math.max(headerHeight - 64, 160);

    showStickyHeader.value = shouldShow;

};

onMounted(() => {
    updateStickyHeader();
    window.addEventListener("scroll", updateStickyHeader, {passive: true});
    window.addEventListener("resize", updateStickyHeader);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", updateStickyHeader);
    window.removeEventListener("resize", updateStickyHeader);
    document.body.style.overflow = "";
    document.querySelector(".app-wrapper")?.removeAttribute("inert");
});

watch(() => route.path, async () => {
    closeMobileMenu();
    await nextTick();
    updateStickyHeader();
});

watch(mobileMenuOpen, async (isOpen) => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const appWrapper = document.querySelector(".app-wrapper");
    if (isOpen) {
        appWrapper?.setAttribute("inert", "");
        await nextTick();
        mobileMenuCloseButton.value?.focus();
    } else {
        appWrapper?.removeAttribute("inert");
        await nextTick();
        mobileMenuTrigger.value?.focus();
    }
});
</script>

<style scoped>
/* Frontend design · signature: an itinerary drawn as the home page opens. */

.hero-kicker,
.hero-line,
.hero-copy,
.hero-actions,
.scroll-cue {
    animation: hero-content-in 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.hero-kicker { animation-delay: 0.18s; }
.hero-line { animation-delay: 0.3s; }
.hero-line-delayed { animation-delay: 0.4s; }
.hero-copy { animation-delay: 0.54s; }
.hero-actions { animation-delay: 0.66s; }
.scroll-cue { animation-delay: 1.2s; }

.route-sketch {
    color: rgb(241 191 0 / 78%);
}

.route-path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: draw-route 1.8s 0.55s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

.route-point,
.route-label,
.route-distance {
    opacity: 0;
    animation: route-point-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.route-point {
    fill: var(--color-spain-yellow);
    stroke: rgb(255 249 232 / 75%);
    stroke-width: 4;
    transform-box: fill-box;
    transform-origin: center;
}

.route-point-one { animation-delay: 0.58s; }
.route-point-two { animation-delay: 1.05s; }
.route-point-three { animation-delay: 1.45s; }
.route-point-four { animation-delay: 2s; }
.route-label-origin { animation-delay: 0.72s; }
.route-label-destination { animation-delay: 2.08s; }
.route-distance { animation-delay: 1.75s; }

.route-label {
    border: 1px solid rgb(255 255 255 / 22%);
    border-radius: 999px;
    background: rgb(37 26 22 / 52%);
    padding: 0.55rem 0.8rem;
    color: rgb(255 255 255 / 78%);
    font-family: var(--font-mono);
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    backdrop-filter: blur(8px);
}

.scroll-dot {
    animation: scroll-pulse 1.6s 1.5s ease-in-out infinite;
}

@keyframes hero-content-in {
    from {
        opacity: 0;
        transform: translateY(1.25rem);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes draw-route {
    to { stroke-dashoffset: 0; }
}

@keyframes route-point-in {
    from {
        opacity: 0;
        transform: scale(0.35);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes scroll-pulse {
    0%, 100% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(0.55rem); opacity: 0.35; }
}

.mobile-sheet-enter-active,
.mobile-sheet-leave-active {
    transition: opacity 220ms ease-out;
}

.mobile-sheet-enter-active .mobile-menu-panel,
.mobile-sheet-leave-active .mobile-menu-panel {
    transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
}

.mobile-sheet-enter-from,
.mobile-sheet-leave-to {
    opacity: 0;
}

.mobile-sheet-enter-from .mobile-menu-panel,
.mobile-sheet-leave-to .mobile-menu-panel {
    transform: translateY(100%);
}

.sticky-nav-enter-active,
.sticky-nav-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.sticky-nav-enter-from,
.sticky-nav-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
    .hero-kicker,
    .hero-line,
    .hero-copy,
    .hero-actions,
    .route-path,
    .route-point,
    .route-label,
    .route-distance,
    .scroll-cue,
    .scroll-dot {
        animation: none;
        opacity: 1;
        transform: none;
        stroke-dashoffset: 0;
    }
}
</style>
