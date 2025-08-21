import * as functionsFramework from "@google-cloud/functions-framework";
import express from "express";
import { serve } from "inngest/express";
import { functions, inngest } from "./inngest"; // uses your ./inngest/index.ts exports

const app = express();

// Expose the Inngest handler at /api/inngest
app.use("/api/inngest", serve(inngest, { functions }));

// Register a single HTTP function named "inngest" (matches --target=inngest)
functionsFramework.http("inngest", app);
