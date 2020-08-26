/* cards */
function init() {
    let tabBody = document.querySelectorAll('.cards__wrapper');
    for (let i = 1; i < tabBody.length; i++) {
        tabBody[i].style.display = 'none';
    }
}
init();

let tab = document.querySelectorAll('.tab');
tab.forEach(function(element) {
    element.onclick = showTabs;
});

function showTabs(){
    console.log('hshsh'); /* inspect function on click */
    //getAttribute('data')
    let data = this.getAttribute('data');
    console.log(data);
    let tabBody = document.querySelectorAll('.cards__wrapper');
    for (let i = 0; i < tabBody.length; i++) {
        tabBody[i].style.display = 'none';
    }
    /* use `` */
    document.querySelector(`.cards__wrapper[data="${data}"]`).style.display = 'flex';
}

/* 
let obj = document.querySelector('.object');
console.log(obj)


let neurology = document.querySelector('#cardWrapperNeurology').onclick = obj.style.marginLeft = '480px';

let rheumatology = document.querySelector('#cardWrapperMassage').onclick = obj.style.marginLeft = '680px';

let massage = document.querySelector('#cardWrapperMassage');
 */