
const slides = document.querySelectorAll('.slide')
var counter = 0;
// console.log(slides);

slides.forEach( (slide,index) => {
    slide.style.left = `${index*100}%`
})



let prev = document.getElementById('prev')
let next = document.getElementById('next')

prev.addEventListener('click', () => {
    // alert()
    counter--;

    if (counter < 0) {
        counter = slides.length - 1;
    }

    slideImg()
})

next.addEventListener('click', () => {
    // alert()
    counter++;

    if (counter >= slides.length) {
        counter = 0;
    }
    
    slideImg()
})

let slideImg = () => {
    slides.forEach( (slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}
