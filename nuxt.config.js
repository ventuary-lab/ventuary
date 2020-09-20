const { sections, metaTags, flattenSections, shortDescription, getSitemap } = require('./global/links');

export const head = {
  title: "Ventuary",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: "ventuary landing" },
    ...metaTags,
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
    }
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/img/icons/favicon_vlab.ico" }]
};
const plugins = [{ src: "~/plugins/vue-scroll-spy.js" }];
const loading = { color: "#3B8070" };
const build = {
  /*
   ** Run ESLint on save
   */
  extend(config, { isDev, isClient }) {
    if (isDev && isClient) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/
      });
    }
  }
};
