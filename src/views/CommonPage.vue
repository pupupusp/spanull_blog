<script setup lang="ts">
import { DarkTheme24Filled } from "@vicons/fluent";
</script>

<template>
	<RouterView name="top"></RouterView>
	<RouterView></RouterView>
	<n-affix class="theme-affix">
		<n-button style="font-size: 24px" type="primary" :circle="true">
			<n-icon>
				<DarkTheme24Filled />
			</n-icon>
		</n-button>
	</n-affix>
</template>
