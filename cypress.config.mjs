import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || "https://academy-dev.dartle.app/",
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});
