<!--
 * @Description: 
 * @Date: 2023-04-30 00:55:55
 * @LastEditTime: 2023-05-09 16:55:52
 * @FilePath: \spanull_blog\src\views\CommonPage.vue
-->
<script setup lang="ts">
import { DarkTheme24Filled } from "@vicons/fluent";
import { globalStore } from "@/stores";
const store = globalStore();

import { getColors } from "@/utils/util.ts";

function changeTheme() {
	getColors();

	store.theme = store.theme === "light" ? "dark" : "light";
}
</script>

<template>
	<RouterView name="top"></RouterView>
	<RouterView></RouterView>
	<img id="myImg" src="@/assets/bg-1.jpg" />

	<n-affix class="theme-affix">
		<n-button style="font-size: 100px" type="primary" :circle="true" @click="changeTheme">
			<n-icon size="30px" color="">
				<DarkTheme24Filled />
			</n-icon>
		</n-button>
	</n-affix>
</template>
