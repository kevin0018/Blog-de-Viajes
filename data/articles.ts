import type { TravelArticle } from "~/types/article";

export const articles = [
    {
        slug: "viajar-con-presupuesto",
        titulo: "Viajar con presupuesto sin renunciar al viaje",
        resumen: "Una forma práctica de decidir en qué ahorrar y qué experiencias merece la pena conservar.",
        introduccion: "Viajar con un presupuesto limitado no consiste en elegir siempre la opción más barata. Consiste en saber qué partes del viaje te importan, ponerles una cifra y recortar aquello que apenas cambia la experiencia.",
        categoria: "Planificación",
        imagen: "assets/images/presupuesto.jpg",
        alt: "Teléfono y libreta utilizados para organizar un presupuesto de viaje",
        autor: "Kelly Sikkema",
        creditoAutorUrl: "https://unsplash.com/es/@kellysikkema?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/telefono-inteligente-android-negro-3-Tc_5LROrM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        secciones: [
            {
                titulo: "Empieza por un límite completo",
                parrafos: [
                    "Antes de buscar vuelos, define cuánto puedes gastar en todo el viaje. Incluye transporte, alojamiento, comida, entradas, desplazamientos locales y un pequeño margen para imprevistos.",
                    "Separar el presupuesto por categorías evita que una oferta atractiva de alojamiento deje sin espacio al resto del plan.",
                ],
            },
            {
                titulo: "Elige tus prioridades",
                parrafos: [
                    "Reserva más dinero para una o dos experiencias que realmente definan el destino y simplifica lo demás. Un buen museo, una excursión o una comida especial suelen dejar más recuerdo que varios gastos improvisados.",
                ],
                puntos: [
                    "Alojamiento bien comunicado para reducir desplazamientos.",
                    "Actividades gratuitas agrupadas por barrios.",
                    "Una experiencia principal reservada con antelación.",
                ],
            },
            {
                titulo: "Deja decisiones tomadas",
                parrafos: [
                    "Anota antes de salir cuánto puedes gastar cada día y qué pagos ya están cubiertos. Tener ese contexto a mano reduce decisiones impulsivas sin convertir el viaje en una hoja de cálculo constante.",
                ],
            },
        ],
    },
    {
        slug: "elegir-proximo-destino",
        titulo: "Cómo elegir tu próximo destino",
        resumen: "Una guía para comparar ciudades por tiempo disponible, ritmo y tipo de experiencia.",
        introduccion: "La lista de lugares posibles suele crecer más rápido que los días de vacaciones. Elegir resulta más sencillo cuando se compara cada destino con las condiciones reales del viaje, no únicamente con sus fotografías.",
        categoria: "Destinos",
        imagen: "assets/images/destinos.jpg",
        alt: "Señal urbana que representa diferentes direcciones de viaje",
        autor: "Hennie Stander",
        creditoAutorUrl: "https://unsplash.com/es/@henniestander?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/foto-en-escala-de-grises-del-letrero-de-la-calle-MKvKLElBLwY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        secciones: [
            {
                titulo: "Parte de los días disponibles",
                parrafos: [
                    "Un fin de semana favorece ciudades compactas y conexiones directas. Con cinco o seis días puedes asumir trayectos más largos, explorar barrios alejados o combinar dos bases sin pasar todo el viaje en tránsito.",
                ],
            },
            {
                titulo: "Define el ritmo que buscas",
                parrafos: [
                    "No todos los viajes necesitan una lista extensa. Decide si quieres caminar y descubrir, concentrarte en cultura, descansar o alternar jornadas intensas con tiempo libre.",
                ],
                puntos: [
                    "Ciudad compacta para una escapada corta.",
                    "Barrios variados para viajar sin un itinerario rígido.",
                    "Naturaleza cercana si quieres alternar ciudad y exterior.",
                ],
            },
            {
                titulo: "Compara el viaje completo",
                parrafos: [
                    "Valora horarios de llegada, transporte desde el aeropuerto, clima y coste de moverse por la ciudad. El mejor destino no siempre es el vuelo más barato, sino el que aprovecha mejor el tiempo y el presupuesto disponibles.",
                ],
            },
        ],
    },
    {
        slug: "empacar-ligero",
        titulo: "Empacar ligero para cualquier escapada",
        resumen: "Un sistema sencillo para llevar menos, encontrar todo rápido y adaptarte al clima.",
        introduccion: "Una maleta ligera reduce esperas, facilita los desplazamientos y deja espacio para cambiar de plan. La clave no es llevar muy poco, sino escoger prendas que funcionen juntas y objetos que resuelvan más de una necesidad.",
        categoria: "Consejos",
        imagen: "assets/images/empacar.jpg",
        alt: "Equipaje preparado junto a la entrada de un alojamiento",
        autor: "Raquel Brepohl",
        creditoAutorUrl: "https://unsplash.com/es/@rabrepohl?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/una-pila-de-equipaje-sentada-al-lado-de-un-edificio-Wrer-YhaN8Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        secciones: [
            {
                titulo: "Prepara conjuntos, no prendas",
                parrafos: [
                    "Coloca sobre la cama combinaciones completas y elimina cualquier prenda que solo funcione con una de ellas. Una paleta reducida permite repetir capas sin que el equipaje crezca.",
                ],
            },
            {
                titulo: "Trabaja por capas",
                parrafos: [
                    "Una capa ligera, otra térmica y una protección exterior se adaptan mejor a cambios de temperatura que una única prenda voluminosa. Consulta el tiempo poco antes de salir y ajusta el conjunto, no toda la maleta.",
                ],
                puntos: [
                    "Calzado ya usado y adecuado para caminar.",
                    "Una bolsa ligera para ropa usada o compras.",
                    "Cargadores agrupados en un único estuche.",
                ],
            },
            {
                titulo: "Revisa lo difícil de sustituir",
                parrafos: [
                    "Documentación, medicación y elementos específicos merecen una comprobación final. Los artículos cotidianos suelen poder comprarse en destino; lo personal o imprescindible debe viajar contigo desde el principio.",
                ],
            },
        ],
    },
] as const satisfies readonly TravelArticle[];

export const findArticleBySlug = (slug: string) => articles.find((article) => article.slug === slug);
