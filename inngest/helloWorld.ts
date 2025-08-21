import { inngest } from "./client";

export default inngest.createFunction(
  { id: "hello-world" },
  { event: "demo/event.sent" },
  async ({ event }) => {
    // Your schema defines data.message; use that
    return { message: `Hello ${event.data.message}!` };
  }
);
