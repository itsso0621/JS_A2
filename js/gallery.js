
//Declare and initialize variables
const displayedImg = document.querySelector('figure img');
const thumbBar = document.querySelectorAll('#thumbnail img');
const caption = document.querySelector('figcaption');

//Use forEach to replace src of thumbnail images with large images and print them out in displayedImg position when user click the each thumbnail images
thumbBar.forEach(img => 
    img.addEventListener('click', e =>(displayedImg.src = e.target.src.replace(/small/g,"large")))
    );

//Set each image's descriptions to be printed together when you click the thumbnail image
thumbBar.forEach(captions => 
    captions.addEventListener('click', e =>(caption.innerHTML = e.target.alt))
    );