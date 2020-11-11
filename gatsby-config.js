module.exports = {
  siteMetadata: {
    title: "Bookmark App",
    author: "Farhan Farooq",
    description: "Bookmark App",
  },
  plugins: [
    "gatsby-plugin-typescript",
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // This type will contain remote schema Query type
    //     typeName: "GSG",
    //     // This is field under which it's accessible
    //     fieldName: "GetBookmarks",
    //     // Url to query from
    //     url: "http://localhost:8888/.netlify/functions/bookmark",
    //   },
    // },
  ],
};
