import ColorThief from "colorthief";

export function getColors() {
	let myImg = document.getElementById("myImg");
	let colorthief = new ColorThief();
	console.log(colorthief, "colorthief");

	let bacolor = colorthief.getPalette(myImg);
	console.log(bacolor, "sssssssssssssssssss");
}
