import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // Unknown file requests should not receive the HTML page as a successful response.
  app.use("*", (req, res) => {
    if (path.extname(req.path)) {
      res.sendStatus(404);
      return;
    }
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
