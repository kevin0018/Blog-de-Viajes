export const useJsonLd = (data: Record<string, unknown> | readonly Record<string, unknown>[]) => {
    useHead({
        script: [
            {
                type: "application/ld+json",
                textContent: JSON.stringify(data),
            },
        ],
    });
};
