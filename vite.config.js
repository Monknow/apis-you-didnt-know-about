const {defineConfig} = require("vite");

module.exports = defineConfig({
	server: {
		host: true,
		https: true,
	},
});
