import {defineConfig} from "vite";
import {resolve} from "path";

export default defineConfig({
	base: "/apis-you-didnt-know-about/",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				origin: resolve(__dirname, "origin/index.html"),
			},
		},
	},
	server: {
		https: true,
		host: true,
	},
});
