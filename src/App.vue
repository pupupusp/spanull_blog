<script setup lang="ts">
import { NConfigProvider } from "naive-ui";
import { globalStore } from "@/stores";
import { darkTheme } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";

const store = globalStore();
const lightThemeOverrides: Object = {
	common: {
		...store.primaryStyle,
	},
};

const darkThemeOverrides: Object = {
	common: {
		primaryColor: "#FFFFFF",
	},
};
</script>

<template>
	<n-config-provider
		:locale="zhCN"
		:date-locale="dateZhCN"
		:theme="store.theme === 'light' ? null : darkTheme"
		:theme-overrides="store.theme === 'light' ? lightThemeOverrides : darkThemeOverrides"
	>
		<RouterView></RouterView>
	</n-config-provider>
</template>

<style scoped></style>
