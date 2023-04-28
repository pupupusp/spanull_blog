<script setup lang="ts">
import { NConfigProvider } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";

const lightThemeOverrides: Object = {
	// common: {
	// 	primaryColor: "#000000",
	// },
};

const darkThemeOverrides: Object = {
	// common: {
	// 	primaryColor: "#FFFFFF",
	// },
};

const theme = null;
</script>

<template>
	<n-config-provider
		:locale="zhCN"
		:date-locale="dateZhCN"
		:theme="theme"
		:theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides"
	>
		<RouterView></RouterView>
	</n-config-provider>
</template>

<style scoped></style>
