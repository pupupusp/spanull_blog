/*
 * @Description:
 * @Date: 2023-05-09 16:40:47
 * @LastEditTime: 2023-05-09 16:45:18
 * @FilePath: \spanull_blog\types\index.d.ts
 */
declare module "colorthief" {
	const content: any;
	/// 这里的 content 可以根据自己的需要，添加需要的类型，这的话可以让 ts 更好的提示
	/**
	type content = {
		test: string
	}
 */
	export = content;
}
declare module "*.js";
