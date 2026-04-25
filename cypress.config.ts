import { defineConfig } from "cypress";
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env' }) // или '.env.test' и т.п.

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      BURGER_API_URL: process.env.BURGER_API_URL,
    },
  },
});
