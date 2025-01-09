const { MongoClient } = require("mongodb");
const express = require("express");

async function main() {
  const uri =
    "mongodb+srv://policonstructkiev:qZPtJZmTTOHNs2i1@mongotestcluster.kcikq.mongodb.net/?retryWrites=true&w=majority&appName=MongoTestCluster";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    // ====================== InsertOne()
    // await createListing(client, {
    //   name: "Lovely Loft",
    //   summary: "A Charming Loft in Paris",
    //   bedrooms: 1,
    //   bathrooms: 1,
    // });
    // ===================================

    // ===================== InsertMany()

    // await createMultipleListings(client, [
    //   {
    //     name: "Cozy Mountain Cabin",
    //     summary: "Rustic retreat with stunning views of the Rockies",
    //     bedrooms: 2,
    //     bathrooms: 1,
    //     beds: 3,
    //     last_review: new Date(),
    //   },
    //   {
    //     name: "Beachfront Paradise",
    //     summary: "Modern condo steps away from pristine white sand beaches",
    //     bedrooms: 3,
    //     bathrooms: 2,
    //     beds: 4,
    //     last_review: new Date(),
    //   },
    //   {
    //     name: "Urban Loft Experience",
    //     summary: "Stylish downtown loft in the heart of the city",
    //     bedrooms: 1,
    //     bathrooms: 1,
    //     beds: 2,
    //     last_review: new Date(),
    //   },
    //   {
    //     name: "Countryside Villa",
    //     summary: "Spacious villa surrounded by vineyards and olive groves",
    //     bedrooms: 4,
    //     bathrooms: 3,
    //     beds: 6,
    //     last_review: new Date(),
    //   },
    //   {
    //     name: "Treehouse Adventure",
    //     summary: "Unique treehouse experience in a lush forest setting",
    //     bedrooms: 1,
    //     bathrooms: 1,
    //     beds: 1,
    //     last_review: new Date(),
    //   },
    // ]);

    //=========================================

    // =========================== FindOne()

    findOneListingByName(client, { name: "Treehouse Adventure" });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function findOneListingByName(client, nameOfListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("ListingsAndReviews")
    .findOne(nameOfListing);

  if (result) {
    console.log(
      `Found a listing in the collection with the name ${nameOfListing}`
    );
  } else {
    console.log(`No listings found with the name ${nameOfListing}`);
  }

  async function createMultipleListings(client, newListings) {
    const result = await client
      .db("sample_airbnb")
      .collection("ListingsAndReviews")
      .insertMany(newListings);

    console.log(
      `${result.insertedCount} new listings created with the following id(s):`
    );
    console.log(result.insertedIds);
  }

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

//continue with #9 @ 0:00
// ~ mongosh gives an error: MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017
// keep working on that}
