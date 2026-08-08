import type { Destination } from "../types/destination";

export const destinations = [
    {
        id: "paris",
        nombre: "París",
        pais: "Francia",
        imagen: "assets/images/paris.jpg",
        alt: "Torre Eiffel sobre el paisaje de París",
        posicionImagen: "center 46%",
        descripcion: "Paseos junto al Sena, pequeñas galerías y cafés con vistas a la ciudad.",
        autor: "Anthony DELANOIX",
        destacado: true,
        layout: "md:row-span-2 lg:col-span-2 lg:row-span-4",
        estancia: "3–4 días",
        mejorEpoca: "Primavera u otoño",
        planes: [
            "Cruzar el Sena a pie y enlazar Île de la Cité con el Barrio Latino.",
            "Reservar una mañana para Montmartre antes de que se llenen sus calles.",
            "Cerrar el día en Trocadéro cuando empiecen a encenderse las luces.",
        ],
        creditoAutorUrl: "https://unsplash.com/es/@anthonydelanoix?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/eiffel-tower-during-daytime-Q0-fOL2nqZc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
        id: "roma",
        nombre: "Roma",
        pais: "Italia",
        imagen: "assets/images/roma.jpg",
        alt: "El Coliseo de Roma al atardecer",
        posicionImagen: "center",
        descripcion: "Historia a cielo abierto, plazas vivas y sobremesas que siempre se alargan.",
        autor: "David Köhler",
        destacado: false,
        layout: "lg:col-span-2 lg:row-span-2",
        estancia: "3 días",
        mejorEpoca: "Abril, mayo u octubre",
        planes: [
            "Empezar temprano entre el Coliseo, el Foro y el monte Palatino.",
            "Caminar sin prisa desde Piazza Navona hasta el Panteón.",
            "Cruzar al Trastevere para terminar el día con una cena larga.",
        ],
        creditoAutorUrl: "https://unsplash.com/es/@davidkhlr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/colosseum-arena-photography-VFRTXGw1VjU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
        id: "tokio",
        nombre: "Tokio",
        pais: "Japón",
        imagen: "assets/images/tokio.jpg",
        alt: "Rascacielos y letreros luminosos de Tokio por la noche",
        posicionImagen: "center 42%",
        descripcion: "Tradición y neón conviven en una ciudad que nunca se recorre de una sola manera.",
        autor: "Erik Eastman",
        destacado: true,
        layout: "md:row-span-2 lg:col-span-2 lg:row-span-4",
        estancia: "5–6 días",
        mejorEpoca: "Primavera u otoño",
        planes: [
            "Contrastar los templos de Asakusa con el neón de Shinjuku.",
            "Recorrer Yanaka y sus pequeñas tiendas a primera hora.",
            "Subir a un mirador al atardecer para entender la escala de la ciudad.",
        ],
        creditoAutorUrl: "https://unsplash.com/es/@erikeae?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/foto-de-personas-cruzando-la-carretera-4HG5hlhmZg8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
        id: "londres",
        nombre: "Londres",
        pais: "Reino Unido",
        imagen: "assets/images/londres.jpg",
        alt: "El Big Ben y el Parlamento de Londres junto al Támesis",
        posicionImagen: "center 62%",
        descripcion: "Mercados, museos y barrios con carácter para recorrer sin mirar el reloj.",
        autor: "Luke Stackpoole",
        destacado: true,
        layout: "md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-4",
        estancia: "4 días",
        mejorEpoca: "Mayo, junio o septiembre",
        planes: [
            "Seguir el Támesis desde Westminster hasta Borough Market.",
            "Elegir un gran museo y dejar espacio para descubrir un barrio cercano.",
            "Reservar una mañana para los puestos y fachadas de Notting Hill.",
        ],
        creditoAutorUrl: "https://unsplash.com/es/@withluke?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/torre-del-big-ben-mOEqOtmuPG8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
        id: "nueva-york",
        nombre: "Nueva York",
        pais: "Estados Unidos",
        imagen: "assets/images/nueva-york.jpg",
        alt: "Empire State Building y el perfil de Nueva York al anochecer",
        posicionImagen: "center 48%",
        descripcion: "Rascacielos, barrios inagotables y una energía que cambia a cada esquina.",
        autor: "Timo Wagner",
        destacado: true,
        layout: "md:row-span-2 lg:col-span-2 lg:row-span-4",
        estancia: "5 días",
        mejorEpoca: "Mayo, junio u octubre",
        planes: [
            "Cruzar Brooklyn Bridge temprano y desayunar al otro lado.",
            "Dedicar una tarde a Central Park y a uno de sus grandes museos.",
            "Ver caer la noche desde un mirador con vistas a Manhattan.",
        ],
        creditoAutorUrl: "https://unsplash.com/es/@timovaknar?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/empire-state-building-nueva-york-por-la-noche-fT6-YkB0nfg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
        id: "barcelona",
        nombre: "Barcelona",
        pais: "España",
        imagen: "assets/images/barcelona.jpg",
        alt: "Vista aérea de las calles y edificios de Barcelona",
        posicionImagen: "center",
        descripcion: "Arquitectura, mar y calles con vida propia entre el Eixample y la costa.",
        autor: "Logan Armstrong",
        destacado: false,
        layout: "lg:col-span-2 lg:row-span-2",
        estancia: "3 días",
        mejorEpoca: "Mayo, junio o septiembre",
        planes: [
            "Caminar por el Eixample siguiendo las fachadas modernistas.",
            "Perderse por el Born y continuar hasta el paseo marítimo.",
            "Subir a Montjuïc al final de la tarde para ver cambiar la luz.",
        ],
        creditoAutorUrl: "https://unsplash.com/es/@loganstrongarms?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/vista-aerea-de-los-edificios-de-la-ciudad-durante-el-dia-hVhfqhDYciU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
] as const satisfies readonly Destination[];

const homeDestinationIds = ["londres", "roma", "paris", "nueva-york"];

export const homeDestinations = homeDestinationIds.map((id) => {
    const destination = destinations.find((item) => item.id === id);

    if (!destination) {
        throw new Error(`No se ha encontrado el destino destacado: ${id}`);
    }

    return destination;
});

export const findDestinationBySlug = (slug: string) => destinations.find((destination) => destination.id === slug);
