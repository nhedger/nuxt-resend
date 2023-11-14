import { addServerImports, createResolver, defineNuxtModule } from "@nuxt/kit";
import defu from "defu";

// Module options TypeScript interface definition
export interface ModuleOptions {
	apiKey?: string;
}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: "nuxt-resend",
		configKey: "resend",
	},
	// Default configuration options of the Nuxt module
	defaults: {
		apiKey: undefined,
	},
	setup(options, nuxt) {
		const resolver = createResolver(import.meta.url);

		nuxt.options.runtimeConfig.resend = defu(
			nuxt.options.runtimeConfig.resend,
			{
				apiKey: options.apiKey,
			},
		);

		addServerImports([
			{
				name: "useResend",
				as: "useResend",
				from: resolver.resolve("./runtime/server/utils/resend"),
			},
		]);
	},
});
