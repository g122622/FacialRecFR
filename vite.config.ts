import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [
                AntDesignVueResolver({
                    importStyle: false // css in js
                })
            ]
        })
    ],
    resolve: {
        alias: {
            // 设置路径 这里resolve和join可自行选用
            "~": path.resolve(__dirname, "./"),
            // 设置别名
            "@": path.resolve(__dirname, "./src")
        },
        extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    }
});
