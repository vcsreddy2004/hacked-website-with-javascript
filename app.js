let hackerKey;
window.addEventListener("load" , () => {
    hackerKey = setInterval("hack()" , 5000);
});
function hack()
{
    clearInterval(hackerKey);
    window.location.href="hack.html";
}