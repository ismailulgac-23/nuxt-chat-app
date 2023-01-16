// index.js
import express from "express";
import { PrismaClient } from "@prisma/client";

const authRoutes = require("./routes/auth-routes");
const chatRoutes = require("./routes/chat-routes");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

export default {
  path: "/",
  handler: app,
};
