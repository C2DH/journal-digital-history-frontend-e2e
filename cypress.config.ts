import { defineConfig } from "cypress";
import "dotenv/config";

export default defineConfig({
  // projectId: process.env.CYPRESS_PROJECT_ID,
  e2e: {
    baseUrl: process.env.BASE_URL ?? "https://journalofdigitalhistory.org/en",
    experimentalStudio: true,
    chromeWebSecurity: false,
    experimentalPromptCommand: true,
  },
  env: {
    ...process.env,
  },
  retries: 2,
});
