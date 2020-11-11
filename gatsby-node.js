const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // get path to template
  const updateTemplate = path.resolve("./src/templates/update.tsx");
  // get markdown data
  const { data } = await graphql(`
    query {
      GetBookmarks {
        bookmarks {
          id
        }
      }
    }
  `);
  console.log('node', data);
  data.GetBookmarks.bookmarks.forEach((mark) => {
    // create new page
    createPage({
      component: updateTemplate,
      path: `/update/${mark.id}`,
      context: {
        id: mark.id,
      },
    });
  });
};

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;

//   if (page.path.match(/^\/update/)) {
//     page.matchPath = "/update/*";

//     // Update the page.

//     createPage(page);
//   }
// };
