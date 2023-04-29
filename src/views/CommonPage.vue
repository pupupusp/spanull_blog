<script setup lang="ts">
import { DarkTheme24Filled } from "@vicons/fluent";
import { globalStore } from "@/stores";
const store = globalStore();

function changeTheme() {
	store.theme = store.theme === "light" ? "dark" : "light";
}
</script>

<template>
	<RouterView name="top"></RouterView>
	<RouterView></RouterView>
	<n-affix class="theme-affix">
		<n-button style="font-size: 100px" type="primary" :circle="true" @click="changeTheme">
			<n-icon size="30px" color="">
				<DarkTheme24Filled />
			</n-icon>
		</n-button>
	</n-affix>
</template>
