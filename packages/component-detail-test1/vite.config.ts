import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    target: "ES2022",
    // 输出文件夹
    outDir: "dist",
    lib: {
      entry: "src/components/index.tsx",
      // 组件库名称
      name: "ComponentDetailTest1",
      fileName: "component-detail-test1",
      formats: ["umd", "es"], // 打包为通用模块
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "monaco-editor",
        // "@monaco-editor/react",
        "antd",
        // "@ant-design/icons",
      ],
    },
  },
});
