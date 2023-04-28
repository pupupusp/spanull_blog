import { createRouter, createWebHistory } from "vue-router";
import { websiteTitle } from "~/config";

// 路由数组
const routes = [
	{
		path: "/",
		component: () => import("@/views/CommonPage.vue"),
		children: [
			{
				path: "home",
				name: "home",
				components: {
					default: () => import("@/components/CommonContent.vue"),
					top: () => import("@/components/CommonBar.vue"),
				},
				meta: {
					title: "首页",
				},
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

router.afterEach((to) => {
	const { title } = to.meta;
	document.title = title ? `${title} - ${websiteTitle}` : websiteTitle;
});

export default router;
