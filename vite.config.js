// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig( {
	build: {
		entry: {
			main: './src/index.js',
		},
		rollupOptions: {
			output: {
				entryFileNames: 'assets/[name].js',
				chunkFileNames: 'assets/[name].js',
				assetFileNames: 'assets/[name].[ext]',
			},
		},
	},
	server: {
		port: 3000,
	},
	preview: {
		port: 3000,
	},
} );
