let currentSlide = 0;
let counter = 1;
setInterval(() => {
    changeSlide(1)
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 8) {
        counter = 1;
    }
}, 1000);
const slide = document.querySelectorAll('.slides');
function showSlide(index) {
    slide.forEach((slides,i) => {
        slides.style.display = i === index ? 'block' : 'none';        
    });
}
function changeSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = slide.length;
    } else if (currentSlide >= slide.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide)
}




// PresentSlide = 0;
// const slider = document.querySelectorAll('.kartSlide');
// function showKart(index) {
//    slider.forEach((kartSlide,i) => {
//         kartSlide.style.display = i === index ? 'block' : 'none';
//     });
// }
// function changeKart(direction) {
//     PresentSlide += direction;

//     if (PresentSlide < 0) {
//         currentSlide = slider.length;
//     } else if (PresentSlide >=slider.length) {
//         PresentSlide = 0;
//     }
//     showKart(PresentSlide)
// }

// showKart(PresentSlide);