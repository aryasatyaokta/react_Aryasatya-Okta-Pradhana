import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  plugins: [
    react(),
    commonjs({
      include: /node_modules/,
      namedExports: {
        "node_modules/react/index.js": [
          "Children",
          "Component",
          "createElement",
          "useState",
          "useEffect",
          "useRef",
          "useContext",
        ],
        "node_modules/react-dom/index.js": ["render"],
      },
    }),
  ],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-transform-react-jsx"
  ]
});
