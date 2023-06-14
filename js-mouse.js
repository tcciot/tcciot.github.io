let mouseCursor = document.querySelector('.cursor');
let content = document.querySelectorAll('.content');

window.addEventListener('mousemove',cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

content.forEach(link =>{
    link.addEventListener('mouseover', () =>{
        mouseCursor.classList.add('mouse-cresce');
        content.classList.add('cont-hover');
    })
    link.addEventListener('mouseleave', () =>{
        mouseCursor.classList.remove('mouse-cresce');
        content.classList.remove('cont-hover');
    })
});