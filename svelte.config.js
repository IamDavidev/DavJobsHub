import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			"~components/*": "./src/components/*",
			"~interfaces/*": "./src/interfaces/*",
			"~lib/*": "./src/lib/*",
			"~routes/*": "./src/routes/*",
			"~constants/*": "./src/constants/*",
			"@/*": "./src/*"
		}
		
	}
};

export default config;
