const { MongoClient } = require("mongodb");
const express = require("express");

async function main() {
  const uri =
    "mongodb+srv://policonstructkiev:qZPtJZmTTOHNs2i1@mongotestcluster.kcikq.mongodb.net/?retryWrites=true&w=majority&appName=MongoTestCluster";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    await createListing(client, {
      name: "Lovely Loft",
      summary: "A Charming Loft in Paris",
      bedrooms: 1,
      bathrooms: 1,
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function createListing(client, newListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .insertOne(newListing);
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}

// MongoDB & Node.js: Connecting & CRUD Operations (Part 1 of 4) continue @ 12:10

//============================ Previous project with express. Continue when finish with MongoDB set up.

// // init app & middleware

// const app = express();

// app.listen(3000, () => {
//   console.log("app is listening on port 3000");
// });

// //routes

// app.get("/books", (req, res) => {
//   res.json({ mssg: "Welcome to the API" });
// });

//continue with #7 @ 0:00
// ~ mongosh gives an error: MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017
// keep working on that
