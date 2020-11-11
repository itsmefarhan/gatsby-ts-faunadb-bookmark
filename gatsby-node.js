const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // get path to template
  const updateTemplate = path.resolve("./src/templates/update.tsx");
  // get markdown data
  const { data } = await graphql(`
    {
      GetBookmarks {
        bookmarks {
          id
          title
          url
          description
        }
      }
    }
  `);
  console.log("node", data);
  data.GetBookmarks.bookmarks.forEach((mark) => {
    // create new page
    createPage({
      component: updateTemplate,
      path: `/update/${mark.id}`,
      context: {
        id: mark.id,
        title: mark.title,
        url: mark.url,
        description: mark.description,
      },
    });
  });
};
