module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "cms",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
