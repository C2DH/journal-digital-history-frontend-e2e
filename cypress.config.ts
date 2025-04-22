import { defineConfig } from "cypress";
import 'dotenv/config';

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL ??'https://journalofdigitalhistory.org/en',
    experimentalStudio: true,
    chromeWebSecurity: false,
  },
  env: {
    ... process.env,
  }
});
