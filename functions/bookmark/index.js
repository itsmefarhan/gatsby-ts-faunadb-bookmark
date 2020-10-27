const { ApolloServer, gql } = require("apollo-server-lambda");
const faunadb = require("faunadb");
const q = faunadb.query;

const client = new faunadb.Client({ secret: process.env.FAUNADB });

const typeDefs = gql`
  type Query {
    bookmarks: [Bookmark]
  }
  type Bookmark {
    id: ID!
    title: String!
    url: String!
    description: String!
  }

  type Mutation {
    addBookmark(url: String!, description: String!, title: String!): Bookmark
    removeBookmark(id: ID!): Bookmark
  }
`;
q.Create(q.Collection("todos"), {
  data: {
    text,
    done,
    owner,
  },
});
const resolvers = {
  Query: {
    bookmarks: async () => {
      try {
        const result = await client.query(
          q.Map(
            q.Paginate(q.Documents(q.Collection("bookmarks"))),
            q.Lambda((x) => q.Get(x))
          )
        );
        return result.data.map((item) => {
          return {
            id: item.ref.id,
            title: item.data.title,
            url: item.data.url,
            description: item.data.description,
          };
        });
      } catch (error) {
        console.log("error", error);
      }
    },
  },
  Mutation: {
    addBookmark: async (_, { title, url, description }) => {
      try {
        const result = await client.query(
          q.Create(q.Collection("bookmarks"), {
            data: {
              title,
              url,
              description,
            },
          })
        );
        return result.data;
      } catch (error) {
        console.log("error", error);
      }
    },
    removeBookmark: async (_, { id }) => {
      try {
        const result = await client.query(
          q.Delete(q.Ref(q.Collection("bookmarks"), id))
        );
        return result.data;
      } catch (error) {
        console.log("error ", error);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
});
