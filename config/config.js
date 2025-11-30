export const storeConfig = {
  // General site configuration
  site: {
    name: "Tu aroma, tu estilo",
    description: "Rang Catalog",
    shortName: "Rang",
    subtitle: "Tu aroma, tu estilo",
    copyright: "2025 Rang Fragances. All rights reserved.",
    title: "Tu aroma, tu estilo - Catalog",
    url: "https://rang-fragances.github.io/catalog/",
    // Imagen destinada a los preview de los enlaces.
    previewImage: "https://rang-fragances.github.io/catalog/imgs/rang-preliminar.jpg",
    loader: {
      //animationUrl: 'https://assets9.lottiefiles.com/packages/lf20_usmfx6bp.json',
      animationUrl: "./assets/animations/loader_animation.json",
      //animationUrl: './assets/animations/loader_animation.lottie',
      //animationUrl: './assets/animations/perfume-bottle-loader.svg',
      //animationUrl: './assets/animations/bottle-loader-animation.json',
      loadingText: "Explorando Fragancias...",
    },
  },

  // Search and filter configuration
  search: {
    placeholder: "Buscar perfumes...",
    filters: {
      brands: [
        { value: "Afnan", text: "Afnan" },
        { value: "Al Haramain", text: "Al Haramain" },
        { value: "Armaf", text: "Armaf" },
        { value: "Bharara", text: "Bharara" },
        { value: "Lattafa", text: "Lattafa" },
        { value: "Maison Alhambra", text: "Maison Alhambra" },
        { value: "Rasasi", text: "Rasasi" },
        { value: "Giorgio Armani", text: "Giorgio Armani" },
        { value: "Jean Paul Gaultier", text: "Jean Paul Gaultier" },
        { value: "Valentino", text: "Valentino" },
        { value: "Xerjoff", text: "Xerjoff" },
      ],
      genders: [
        { value: "Male", text: "Masculino" },
        { value: "Female", text: "Femenino" },
        { value: "Unisex", text: "Unisex" },
      ],
      sorting: [
        { value: "relevance", text: "Ordenar por relevancia" },
        { value: "price-low", text: "Precio: Menor a Mayor" },
        { value: "price-high", text: "Precio: Mayor a Menor" },
        { value: "newest", text: "Nuevos" },
      ],
    },
  },

  // Tabs configuration
  catalog: {
    tabs: {
      perfumes: "Perfumes",
      decants: "Decants",
    },
  },

  // Footer configuration
  footer: {
    title: "Rang Fragances",
    description: "",
    socialLinks: [
      { platform: "facebook", url: "#" },
      {
        platform: "instagram",
        url: "https://www.instagram.com/rang.fragances/",
      },
      { platform: "whatsapp", url: "#" },
    ],
  },
};

export const apiConfig = {
  google: {
    SheetsUrl:
      "https://script.google.com/macros/s/AKfycbw_vEzkuspy0QOPaEyMBucCMaqU9FLzMgoRx7Gr4FtTmXl3S3uzSq0TJBt6H7_3nXyj/exec",
    sheets: {
      perfumes: "CatalogParfum",
      decants: "CatalogDecant",
    },
  },
};
