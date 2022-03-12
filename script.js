var nav = document.getElementById('nav');
var toggleCollapse = document.getElementById('toggle-collapse');
var toggleclose = document.getElementById('toggle-close');
toggleclose.style.display="none";
toggleclose.style.display="none";
toggleCollapse.addEventListener("click",function () {
    nav.style.display="block";
    toggleCollapse.style.display="none";
    toggleclose.style.display="block";
})
toggleclose.addEventListener("click",function () {
    nav.style.display="none";
    toggleclose.style.display="none";
    toggleCollapse.style.display="block";
})