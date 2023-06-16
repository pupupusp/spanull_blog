<template>
	<div :class="`text-tool-box ${props.isFlex ? 'is-flex' : ''}`">
		<TransitionGroup>
			<div class="text-item text" v-for="(item, index) in textArr" :key="index">
				{{ item }}
			</div>
		</TransitionGroup>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	text: {
		type: String,
		default: "",
		required: true,
		// 文本
	},
	isFlex: {
		type: Boolean,
		default: false,
		// 是否均分
	},
	isInput: {
		type: Boolean,
		default: false,
		// 是否打字效果
	},
	time: {
		type: Number,
		default: 100,
		// 打字间隔时间
	},
});
const textArr = ref<string[]>([]);

onBeforeMount(() => {
	if (props.isInput) {
		inputText();
	} else {
		textArr.value = props.text.split("");
	}
});

function inputText() {
	let list = props.text.split("");
	list.forEach((item, index) => {
		setTimeout(() => {
			textArr.value.push(item);
		}, index * props.time);
	});
}
</script>

<style scoped lang="scss">
.text-tool-box {
	display: flex;
	width: 100%;

	// .text-item {
	// 	flex: 1;
	// }
}
.is-flex {
	justify-content: space-between;
}
.v-enter-active {
	transition: all 2s ease;
}
.v-enter-from {
	opacity: 0;
}
</style>
