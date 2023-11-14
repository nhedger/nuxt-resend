export default defineNuxtConfig({
	modules: ["../src/module"],
	resend: {
		apiKey: "YOUR_API_KEY",
	},
	devtools: { enabled: true },
});
