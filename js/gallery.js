
const displayedImg = document.querySelector('figure img');
const thumbBar = document.querySelectorAll('#thumbnail img');
const caption = document.querySelector('figcaption');

thumbBar.forEach(img => 
    img.addEventListener('click', e =>(displayedImg.src = e.target.src.replace(/small/g,"large")))
    );

thumbBar.forEach(captions => 
    captions.addEventListener('click', e =>(caption.innerHTML = e.target.alt))
    );