import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { siteContent } from "./src/siteContent.js";
const escapeHtml = (s: string) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "site-content-seo",
      transformIndexHtml: {
        order: "pre",
        handler: (html) =>
          html
            .replaceAll("%SITE_TITLE%", escapeHtml(siteContent.seo.title))
            .replaceAll(
              "%SITE_DESCRIPTION%",
              escapeHtml(siteContent.seo.description),
            ),
      },
    },
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
