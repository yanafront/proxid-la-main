import express from "express";
import path from "path";

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simple logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Serve static files
app.use(express.static(path.join(process.cwd(), "dist", "public")));

// Catch-all route for SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist", "public", "index.html"));
});

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;
