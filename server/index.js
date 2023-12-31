import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import dbConnection from "./dbConfig/index.js";
import userRoutes from "./routes/api/users.js";
import postRoutes from "./routes/api/posts.js";
import profileRoutes from "./routes/api/profile.js";
import authRoutes from "./routes/api/auth.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8800;

dbConnection();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
