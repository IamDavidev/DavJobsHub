// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface Platform {
			env: {
				INFOJOBS_TOKEN: string
				TOKEN_GIT: string
				OPENIA_API_KEY: string
			}
		}
	}
}

export {};
