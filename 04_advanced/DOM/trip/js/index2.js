const aLinks = document.querySelectorAll('.city');

let imgTag = document.querySelector('img');
console.log(imgTag);

for (let i = 0; i < aLinks.length; i++) {
    aLinks[i].addEventListener('click', function() {
        imgTag.src = `img/${aLinks[i].classList[1]}.jpg`;

        aLinks.forEach((elem) => {
            elem.classList.remove('curr_sel');
        });
        aLinks[i].classList.add('curr_sel')
    });
}