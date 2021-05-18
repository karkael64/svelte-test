module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|ts|svelte)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
    "@storybook/addon-actions",
    "@storybook/addon-postcss",
  ],
  svelteOptions: {
    preprocess: require("svelte-preprocess")(),
  },
};
