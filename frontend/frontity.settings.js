import { MAPBOX_ACCESS_TOKEN } from "./env.js";

const settings = {
  name: "frontend",
  state: {
    frontity: {
      url: "https://dashboardumkm.terban.id",
      title: "Pesona UMKM Kelurahan Terban",
      description: "Website UMKM Kelurahan Terban dari KKN UGM Yogyakarta 2021",
    },
    mapbox: {
      mapboxAccessToken: MAPBOX_ACCESS_TOKEN,
      latitude: -7.7788728,
      longitude: 110.3749968,
      zoom: 15,
      style: "mapbox://styles/mapbox/light-v10",
    },
  },
  packages: [
    {
      name: "kkn-theme",
      state: {
        theme: {
          // The logo can be a text or an image url
          logo: "UMKM Kelurahan Terban",
          // show background pattern
          showBackgroundPattern: true,
          // show social links
          showSocialLinks: false,
          // the top-level navigation labels and links
          menu: [
            ["Beranda", "/"],
            ["Desa", "/category/desa/"],
            ["Produk UMKM", "/product/"],
            ["Artikel Edukasi", "/category/blog/"],
            ["Peta", "/maps"],
          ],
          // the social links
          socialLinks: [
            ["instagram", "https://www.instagram.com//"],
            ["facebook", "https://www.facebook.com//"],
            ["twitter", "https://www.twitter.com//"],
            ["whatsApp", "https://wa.me/6289612345678"],
          ],
          // footer categories
          categories: [
            ["Desa", "/category/desa"],
            ["Produk UMKM", "/product"],
            ["Artikel Edukasi", "/category/blog"],
            ["Peta", "/maps"],
          ],
          // color shades to use in the blog
          colors: {
            primary: {
              50: "#e9f5f2",
              100: "#d4dcd9",
              200: "#bbc3be",
              300: "#a1aba5",
              400: "#87938b",
              500: "#6d7972",
              600: "#555f58",
              700: "#323c34",
              800: "#232924",
              900: "#272727",
            },
            accent: {
              50: "#ede4d3",
              100: "#fbe3b2",
              200: "#f6d086",
              300: "#f1be58",
              400: "#eca419",
              500: "#d49212",
              600: "#a5710b",
              700: "#775105",
              800: "#483100",
              900: "#1d0f00",
            },
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://dashboardumkm.terban.id",
          postTypes: [
            {
              type: "product", // type slug
              endpoint: "product", // REST API endpoint
              archive: "/product", // link where this custom posts are listed
            },
          ],
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
