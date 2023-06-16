import { defineStore } from "pinia";

export const globalStore = defineStore("main", {
	state: () => ({
		theme: <string>"light",
		primaryStyle: <Record<string, string>>{
			primaryColor: "#18a058",
			primaryColorPressed: "#0c7a43",
			primaryColorHover: "#36ad6a",
			primaryColorSuppl: "#36ad6a",
			colorHoverPrimary: "#36ad6a",
			textColorHover: "#36ad6a",
			textColorTextHover: "#36ad6a",
		},
		message: "",
	}),
	getters: {
		fullMessage: (state) => `The message is "${state}".`,
		// 这个 getter 返回了另外一个 getter 的结果
		emojiMessage(): string {
			return `🎉🎉🎉 ${"666666666666"}`;
		},
	},
	actions: {
		// 异步更新 message
		async updateMessage(newMessage: string): Promise<string> {
			return new Promise((resolve) => {
				setTimeout(() => {
					// 这里的 this 是当前的 Store 实例
					this.message = newMessage;
					resolve("Async done.");
				}, 3000);
			});
		},
		// 同步更新 message
		updateMessageSync(newMessage: string): string {
			// 这里的 this 是当前的 Store 实例
			this.message = newMessage;
			return "Sync done.";
		},
		// 修改颜色
		updateTheme(newTheme: Record<string, string>): void {
			this.primaryStyle = { ...this.primaryStyle, ...newTheme };

			for (const key in newTheme) {
				document.documentElement.style.setProperty("--" + key, newTheme[key]);
			}
		},
	},
	persist: true,
});
