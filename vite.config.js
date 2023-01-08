import { defineConfig } from "vite";
import { resolve } from "path";

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

const commonConfig = defineConfig({
    root,
});

const devConfig = defineConfig({
    ...commonConfig,
    server: {
        open: true,
    }
});

const prodConfig = defineConfig({
    ...commonConfig,
    build: {
        outDir,
        rollupOptions: {
            input: {
                home: resolve(root, './pages/home.html')
            }
        }
    }
});

export default defineConfig(({ command }) => command === 'serve' ? devConfig: prodConfig)