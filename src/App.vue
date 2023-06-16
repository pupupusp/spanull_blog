<script setup lang="ts">
import { NConfigProvider } from "naive-ui";
import { globalStore } from "@/stores";
import { darkTheme } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";
import { getColors, rgbToHex } from "@/utils/util.ts";

const store = globalStore();
const lightThemeOverrides: Object = {
	common: {
		...store.primaryStyle,
	},
};

const darkThemeOverrides: Object = {
	common: {
		primaryColor: "#FFFFFF",
		...store.primaryStyle,
	},
};

const url: string = "https://www.von-co.cn:8082/v2/files/1684821901.jpg?is_down=0";
const img: HTMLImageElement = new Image();
img.crossOrigin = "";
img.src = url;

if (img.complete) {
	// alert("该图片已经存在于缓存之中，不会再去重新下载");
	setColors();
} else {
	// alert("图片不存在缓存之中");
	img.onload = function () {
		// alert("图片加载完成");
		setColors();
	};
}

function setColors() {
	const colors: number[][] = getColors(img);
	store.updateTheme({
		primaryColor: rgbToHex(colors[0][0], colors[0][1], colors[0][2]),
		primaryColorPressed: rgbToHex(colors[1][0], colors[1][1], colors[1][2]),
		primaryColorHover: rgbToHex(colors[2][0], colors[2][1], colors[2][2]),
		primaryColorSuppl: rgbToHex(colors[2][0], colors[2][1], colors[2][2]),
		textColorHover: rgbToHex(colors[2][0], colors[2][1], colors[2][2]),
		textColorTextHover: rgbToHex(colors[2][0], colors[2][1], colors[2][2]),
		colorHoverPrimary: rgbToHex(colors[2][0], colors[2][1], colors[2][2]),
	});
}
</script>

<template>
	<n-config-provider
		:locale="zhCN"
		:date-locale="dateZhCN"
		:theme="store.theme === 'light' ? null : darkTheme"
		:theme-overrides="store.theme === 'light' ? lightThemeOverrides : darkThemeOverrides"
	>
		<div :id="store.theme === 'light' ? 'light' : 'dark'">
			<RouterView v-slot="{ Component }">
				<template v-if="Component">
					<Transition mode="out-in">
						<KeepAlive>
							<Suspense>
								<!-- 主要内容 -->
								<component :is="Component"></component>
								<!-- 加载中状态 -->
								<template #fallback> 正在加载... SuspenseSuspense</template>
							</Suspense>
						</KeepAlive>
					</Transition>
				</template>
			</RouterView>
		</div>
	</n-config-provider>
</template>

<style scoped></style>
