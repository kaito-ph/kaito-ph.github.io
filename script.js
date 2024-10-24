document.oncontextmenu = () => {
	alert("Don't right click")
	return false
}

document.onkeydown = e => {
	if (e.key == "F12") {
	alert("Don't try to inspect element")
	return false
}
	if(e.ctrlKey && e.key == "u"){
		alert("Don't try to view page sources")
		return false
	}
	if (e.ctrlKey && e.key == "c"){
		alert("Don't try to copy page element")
		return false
	}
	if(e.ctrlKey && e.key == "v"){
		alert("Don't try to paste anything to page")
		return false
	}
}


const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const mp4 = document.querySelector(".mp4");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I Love You See you on Christmas";
    gif.src = 
    "https://media.tenor.com/iFXnOUD2D7oAAAAj/milk-and-mocha.gif"
});

noBtn.addEventListener('click', () => {
    question.innerHTML = "please click the yes button!!!!!";
		const noBtnRect = noBtn.getBoundingClientRect();
		const maxX = window.innerWidth - noBtnRect.width;
		const maxY = window.innerHeight - noBtnRect.height;

		const randomX = Math.floor(Math.random() * maxX);
		const randomY = Math.floor(Math.random() * maxY);

		noBtn.style.left = randomX + "px";
		noBtn.style.top = randomY + "px";
    gif.src = "https://media3.giphy.com/media/l378giAZgxPw3eO52/200w.gif?cid=6c09b952w8phd4ttuesnlkw2wtoktnsdib48k8ch5jhye8cf&ep=v1_gifs_search&rid=200w.gif&ct=g"
	mp4.src = "Snaptik.app_7196714647775481114.mp4"
    
});