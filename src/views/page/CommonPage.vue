<!--
 * @Description: 
 * @Date: 2023-04-30 00:55:55
 * @LastEditTime: 2023-05-09 16:55:52
 * @FilePath: \spanull_blog\src\views\CommonPage.vue
-->
<script setup lang="ts">
import { DarkTheme24Filled, ArrowCircleUp20Filled } from "@vicons/fluent";
import { globalStore } from "@/stores";

const store = globalStore();

function changeTheme() {
	store.theme = store.theme === "light" ? "dark" : "light";
}
</script>

<template>
	<div class="common-page">
		<RouterView name="top"></RouterView>
		<div class="common-page-content">
			<RouterView name="sider"></RouterView>
			<RouterView></RouterView>
		</div>
		<n-back-top class="btn-back-top" :right="20" :bottom="110">
			<n-icon size="30px" :color="store.theme === 'light' ? store.primaryStyle.primaryColor : ''">
				<ArrowCircleUp20Filled />
			</n-icon>
		</n-back-top>
		<n-affix class="theme-affix">
			<n-button type="primary" :circle="true" @click="changeTheme">
				<n-icon size="30px">
					<DarkTheme24Filled />
				</n-icon>
			</n-button>
		</n-affix>
	</div>
</template>
