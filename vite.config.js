import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root: path.resolve(__dirname, 'electron_starter/components/electron-starter'),
    base: './',
});
