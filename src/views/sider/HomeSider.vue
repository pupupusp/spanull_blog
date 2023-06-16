<template>
	<div class="home-sider">
		<div class="info-box">
			<n-image class="avatar" :src="imgs.avatar" width="100" />
			<div class="text-title name">Spanull</div>
			<div class="row-around all-100">
				<div class="column-center" v-for="(item, index) in list" :key="index">
					<div class="text">{{ item.title }}</div>
					<div class="text">{{ item.value }}</div>
				</div>
			</div>
			<div class="all-100 row-around padding-20">
				<n-image preview-disabled class="btn" :src="globalStore().theme == 'light' ? icons.github : icons.dark_github" />
				<n-image preview-disabled class="btn" :src="globalStore().theme == 'light' ? icons.qq : icons.dark_qq" />
			</div>
		</div>
		<div class="info-box sign-box column">
			<n-image class="margin-top-20" preview-disabled width="100" :src="imgs.sign" />
			<TransitionGroup>
				<div class="margin-top-20" v-for="item in popList" :key="item"><TextTool isFlex isInput :time="150" :text="item" /></div>
			</TransitionGroup>
		</div>
	</div>
</template>

<script setup lang="ts">
import { imgs, icons } from "@/utils/enum";
import { globalStore } from "@/stores";

const popList = ref<string[]>([]);
const textList = [
	"花谢花飞飞满天，红消香断有谁怜？",
	"游丝软系飘春榭，落絮轻沾扑绣帘。",
	"闺中女儿惜春暮，愁绪满怀无释处。",
	"手把花锄出绣帘，忍踏落花来复去？",
	"柳丝榆荚自芳菲，不管桃飘与李飞。",
	"桃李明年能再发，明年闺中知有谁？",
	"三月香巢已垒成，梁间燕子太无情！",
	"明年花发虽可啄，却不道人去梁空巢也倾。",
	"一年三百六十日，风刀霜剑严相逼。",
	"明媚鲜妍能几时？一朝漂泊难寻觅。",
	"花开易见落难寻，阶前闷死葬花人。",
	"独倚花锄偷洒泪，洒上空枝见血痕。",
	"杜鹃无语正黄昏，荷锄归去掩重门。",
	"青灯照壁人初睡，冷雨敲窗被未温。",
	"怪奴底事倍伤神？半为怜春半恼春。",
	"怜春忽至恼忽去，至又无言去不闻。",
	"昨宵庭外悲歌发，知是花魂与鸟魂。",
	"花魂鸟魂总难留，鸟自无言花自羞。",
	"愿奴胁下生双翼，随花飞到天尽头。",
	"天尽头，何处有香丘？",
	"未若锦囊收艳骨，一抔净土掩风流！",
	"质本洁来还洁去，强于污淖陷渠沟。",
	"尔今死去侬收葬，未卜侬身何日丧？",
	"侬今葬花人笑痴，他年葬侬知有谁？",
	"试看春残花渐落，便是红颜老死时。",
	"一朝春尽红颜老，花落人亡两不知",
];

const list: Record<string, any>[] = [
	{
		title: "文章",
		value: 0,
	},
	{
		title: "分类",
		value: 0,
	},
	{
		title: "标签",
		value: 0,
	},
];

onBeforeMount(() => {
	getArticleList();
});

function getArticleList() {
	textList.forEach((item, index) => {
		let times: number = 0;
		for (let i = 0; i < index; i++) {
			times += textList[i].length * 150;
		}
		switch (index) {
			case 0:
			case 1:
			case 2:
				setTimeout(() => {
					popList.value.push(item);
				}, times);
				break;
			default:
				setTimeout(() => {
					popList.value.shift();
				}, times);

				setTimeout(() => {
					popList.value.push(item);
				}, times + 2000);
				break;
		}
	});
}
</script>

<style scoped lang="scss">
.v-leave-active {
	transition: all 2s ease;
}
.v-leave-to {
	opacity: 0;
}
</style>
