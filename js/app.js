const showClass = document.querySelector(".menuArea");
const iconShow = document.querySelector(".iconShow");
const iconRemove = document.querySelector(".remove");
// Menu Select
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const whatiDo = document.querySelector(".whatido");
const resume = document.querySelector(".resume");
const protfolio = document.querySelector(".protfolio");
const skills = document.querySelector(".skills");
const faq = document.querySelector(".faq");
const clientSpeak = document.querySelector(".client-speak");
const contacts = document.querySelector(".contacts");

iconShow.addEventListener("click", showMenu);
function showMenu(){
    showClass.style.display = "block";
}

iconRemove.addEventListener("click", hideMenu);
function hideMenu(){
    showClass.style.display = "none";
}
// Menu Listener
home.addEventListener("click", function(){
    showClass.style.display = "none";
});
about.addEventListener("click", function(){
    showClass.style.display = "none";
});
whatiDo.addEventListener("click", function(){
    showClass.style.display = "none";
});
resume.addEventListener("click", function(){
    showClass.style.display = "none";
});
protfolio.addEventListener("click", function(){
    showClass.style.display = "none";
});
skills.addEventListener("click", function(){
    showClass.style.display = "none";
});
faq.addEventListener("click", function(){
    showClass.style.display = "none";
});
clientSpeak.addEventListener("click", function(){
    showClass.style.display = "none";
});
contacts.addEventListener("click", function(){
    showClass.style.display = "none";
})