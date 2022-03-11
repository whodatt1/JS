document.querySelector('#bgimg').setAttribute('class', 'pic-index');

document.querySelector('.index').addEventListener('click', function() {
    let home = document.querySelector('#bgimg')
    home.setAttribute('class', 'pic-index');
    document.querySelector('.index').setAttribute('style', 'font-weight:bold;cursor:pointer;')
    document.querySelector('.seoul').setAttribute('style', 'font-weight:normal;cursor:pointer;')
    document.querySelector('.tokyo').setAttribute('style', 'font-weight:normal;cursor:pointer;')
    document.querySelector('.paris').setAttribute('style', 'font-weight:normal;cursor:pointer;')
})
document.querySelector('.seoul').addEventListener('click', function() {
    let seoul = document.querySelector('#bgimg')
    seoul.setAttribute('class', 'pic-seoul')
    document.querySelector('.index').setAttribute('style', 'font-weight:normal;cursor:pointer;')
    document.querySelector('.seoul').setAttribute('style', 'font-weight:bold;cursor:pointer;')
    document.querySelector('.tokyo').setAttribute('style', 'font-weight:normal;cursor:pointer;')
    document.querySelector('.paris').setAttribute('style', 'font-weight:normal;cursor:pointer;')
})
document.querySelector('.tokyo').addEventListener('click', function() {
    let tokyo = document.querySelector('#bgimg')
    tokyo.setAttribute('class', 'pic-tokyo')
    document.querySelector('.index').setAttribute('style', 'font-weight:normal;cursor:pointer;')
    document.querySelector('.seoul').setAttribute('style', 'font-weight:normal;cursor:pointer;')
    document.querySelector('.tokyo').setAttribute('style', 'font-weight:bold;cursor:pointer;')
    document.querySelector('.paris').setAttribute('style', 'font-weight:normal;cursor:pointer;')
})
document.querySelector('.paris').addEventListener('click', function() {
    let paris = document.querySelector('#bgimg')
    paris.setAttribute('class', 'pic-paris')
    document.querySelector('.index').setAttribute('style', 'font-weight:normal;cursor:pointer;')
    document.querySelector('.seoul').setAttribute('style', 'font-weight:normal;cursor:pointer;')
    document.querySelector('.tokyo').setAttribute('style', 'font-weight:normal;cursor:pointer;')
    document.querySelector('.paris').setAttribute('style', 'font-weight:bold;cursor:pointer;')
})
