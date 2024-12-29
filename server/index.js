import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/connectDb.js";
import userRouter from "./route/user.route.js";
import bodyParser from "body-parser";
import categoryRouter from "./route/category.route.js";
import uploadRouter from "./route/upload.route.js";
// import fileUpload from "express-fileupload";

dotenv.config();

const app = express();
// app.use(fileUpload());
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan());

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads',express.static('uploads'));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
const PORT = 8080 || process.env.PORT;
app.get("/", (request, response) => {
  //server to client
  response.json({
    message: "server is running ",
  });
});

app.use("/api/user", userRouter);
app.use("/api/category",categoryRouter)
app.use("/api/file",uploadRouter)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server is running", PORT);
  });
});
