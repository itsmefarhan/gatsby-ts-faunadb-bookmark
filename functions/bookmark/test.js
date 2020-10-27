// const { ApolloServer, gql } = require("apollo-server-lambda");
const faunadb = require("faunadb");
const q = faunadb.query;

const client = new faunadb.Client({ secret: process.env.FAUNADB });

// CREATE
// async function create() {
//   try {
//     const result = await client.query(
//       q.Create(q.Collection("bookmarks"), {
//         data: {
//           title: "test bookmark 2",
//           url: "url 2",
//           description: "desc 2",
//         },
//       })
//     );
//     console.log('result.data',result.data);    
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// create();

// Read
// async function read() {
//   try {
//     const result = await client.query(
//       q.Map(
//         q.Paginate(q.Documents(q.Collection("bookmarks"))),
//         q.Lambda((x) => q.Get(x))
//       )
//     );
//     result.data.map(item => console.log(item))
//   } catch (err) {
//     console.log(err);
//   }
// }
// read();

// Update
// async function update(){
//   try {
//     const result = await client.query(
//       q.Update(q.Ref(q.Collection('bookmarks'), '280552772835738113'), {
//         data: {
//           url: "url 2 updated"
//         }
//       })
//     )
//     console.log(result)
//   } catch (err) {
//     console.log(err)
//   }
// }
// update()

// Delete
// async function del() {
//   try {
//     const result = await client.query(
//       q.Delete(q.Ref(q.Collection("bookmarks"), "280552772835738113"))
//     );
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }
// del();
