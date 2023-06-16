import ColorThief from "colorthief";

// 获取图片主色调
export function getColors(myImg: HTMLImageElement): number[][] {
	// let myImg = document.getElementById("myImg");
	let colorthief = new ColorThief();
	let bacolor = colorthief.getPalette(myImg);
	return bacolor;
}

// rgb转16进制函数
export function rgbToHex(red: number, green: number, blue: number): string {
	const hexRed = red.toString(16).padStart(2, "0");
	const hexGreen = green.toString(16).padStart(2, "0");
	const hexBlue = blue.toString(16).padStart(2, "0");
	const hexCode = `#${hexRed}${hexGreen}${hexBlue}`;
	return hexCode;
}

// 获取距离页面顶部的百分比
export function getScrollPercent(): number {
	const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
	const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
	const percent = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
	return percent;
}
