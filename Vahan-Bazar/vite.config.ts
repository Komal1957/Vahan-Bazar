// import { defineConfig } from "vite";
// import path from "path";
// import { fileURLToPath } from "url";
// import react from "@vitejs/plugin-react-swc";
// import { componentTagger } from "lovable-tagger";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));


// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   server: {
//     host: true,
//     port: 8080,
//   },
//   plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// }));


// import { defineConfig } from "vite";
// import path from "path";
// import { fileURLToPath } from "url";
// import react from "@vitejs/plugin-react-swc";
// import { componentTagger } from "lovable-tagger";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// export default defineConfig(({ mode }) => ({
//   server: {
//     host: true,
//     port: 5173,
//   },
//   plugins: [
//     react(),
//     ...(mode === "development" ? [componentTagger()] : []),
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// }));


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
