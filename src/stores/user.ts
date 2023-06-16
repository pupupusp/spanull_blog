import { defineStore } from "pinia";

export const user = defineStore("main", {
	state: () => ({
		name: "SPANULL",
	}),
	getters: {},
	actions: {},
	persist: true,
});
