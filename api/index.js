// index.js
import express from "express";
import { PrismaClient } from "@prisma/client";

const authRoutes = require("./routes/auth-routes");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

export default {
  path: "/",
  handler: app,
};
