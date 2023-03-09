import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Get value from localStorage if in browser and the value is stored, otherwise fallback
function fromLocalStorage(storageKey: string, fallbackValue: object) {
	if (browser) {
		const storedValue = window.localStorage.getItem(storageKey);

		if (storedValue !== 'undefined' && storedValue !== null) {
			return typeof fallbackValue === 'object' ? JSON.parse(storedValue) : storedValue;
		}
	}

	return fallbackValue;
}

export const shinyCache = writable(fromLocalStorage('pokeId', {}));
