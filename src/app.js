import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";

//config
const app = express();
const API_DB = process.env.API_DB;
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

// router
app.use("/api", router);

// database config
mongoose.connect(API_DB);
export const viteNodeApp = app;

/**
 * B1: Tạo router mới routes/auth.js, add router vào trong app.js
 * B2: Tạo controller mới (signin với phương thức post)
 * B3: Validation req.body với Joi -> tách riêng thành schemas/auth.js
 */

// import { MongoClient, ServerApiVersion } from "mongodb";
// const uri =
//   "mongodb+srv://hoangnm62:quS_8nLFt9rzHn_@cluster0.mongodb.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// export const viteNodeApp = run;
