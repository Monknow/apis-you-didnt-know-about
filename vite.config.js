const {defineConfig} = require("vite");
import {resolve} from "path";

module.exports = defineConfig({
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
		host: true,
		https: true,
	},
});
