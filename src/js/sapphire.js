import '../scss/sapphire.scss';

$(".ripple-effect, .button").on("mousedown", function(e) {
    let r = findFurthestPoint(e.clientX, this.clientWidth, this.offsetLeft, e.clientY, this.clientHeight, this.offsetTop);

    let circle =  document.createElement("span");
    circle.classList.add("ripple");
    
    circle.style.top = e.clientY + window.scrollY - this.offsetTop - r + "px";
    circle.style.left = e.clientX + window.scrollX - this.offsetLeft - r + "px";
    
    circle.style.width = circle.style.height = r * 2 + "px";
    
    $(this).prepend(circle);
});

$(".ripple-effect, .button").on("mouseup mouseleave dragleave", function() {
    let ripple = $(this).find(".ripple");
    if (ripple.lenght != 0) {
        ripple.css("opacity", '0');
        setTimeout(() => {
            ripple.last().remove()
        }, 300);
    }
});

function findFurthestPoint(clickPointX, elementWidth, offsetX, clickPointY, elementHeight, offsetY) {
    let x = clickPointX + window.scrollX - offsetX > elementWidth / 2 ? 0 : elementWidth;
    let y = clickPointY + window.scrollY - offsetY > elementHeight / 2 ? 0 : elementHeight;
    let d = Math.hypot(x - (clickPointX + window.scrollX - offsetX), y - (clickPointY + window.scrollY - offsetY));
    return d;
}