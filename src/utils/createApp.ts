import express, { Express } from "express";
import routes from "../routes";
import cors from "cors";

export function createApp(): Express {
  const app = express();

  // Enable Parsing Middleware for Requests
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Enable CORS
  app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );

  app.use(function (req, res, next) {
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
    );
    next();
  });
  
  app.use("/", routes);
  return app;
}
