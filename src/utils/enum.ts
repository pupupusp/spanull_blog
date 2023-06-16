// import { globalStore } from "@/stores/global";

// 图片
const avatar = new URL("@/assets/logo1.gif", import.meta.url).href; //头像
const sign = new URL("@/assets/logo2.jpg", import.meta.url).href; //签名图片
const imgs = {
	avatar,
	sign,
};

// 图标
const github = new URL("@/assets/icon/github.svg", import.meta.url).href;
const dark_github = new URL("@/assets/icon/dark_github.svg", import.meta.url);
const qq = new URL("@/assets/icon/qq.svg", import.meta.url).href;
const dark_qq = new URL("@/assets/icon/dark_qq.svg", import.meta.url).href;

const icons = {
	github,
	qq,
	dark_qq,
	dark_github,
};

export { imgs, icons };
