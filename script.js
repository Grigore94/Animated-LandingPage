const scroll_indicator  = document.getElementById("scroll-indicator");

window.addEventListener("scroll",function () {
    const maxScrollHeight = document.body.scrollHeight = window.innerHeight;

    const currentScrolllHeight = (window.scrolly / maxScrollHeight) * 100;
    scroll_indicator.style.width = `${currentScrolllHeight}`
})