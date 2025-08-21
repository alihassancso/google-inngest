import * as functionsFramework from "@google-cloud/functions-framework";
import express from "express";
import { serve } from "inngest/express";
import { functions, inngest } from "./inngest";

const app = express();

// ❌ old (v2-style): app.use("/api/inngest", serve(inngest, { functions }));
// ✅ v3:
app.use("/api/inngest", serve({ client: inngest, functions }));

functionsFramework.http("inngest", app);
