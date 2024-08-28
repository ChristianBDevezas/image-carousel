const bannerImages = document.querySelector(".banner__images");
const images = document.querySelectorAll(".banner__image img");
const bannerDescription = document.querySelector(".banner__description");
const currentNumber = document.getElementById("current");
const totalNumber = document.getElementById("total");
const leftButton = document.querySelector(".banner__btn-left");
const rightButton = document.querySelector(".banner__btn-right");
let index = 0;
let interval = setInterval(changeBanner, 3500);

bannerImages.style.width =`${images.length * 100}%`;

// generate the effect of description for the first image
bannerDescription.classList.add("moving-text");
setTimeout(() => bannerDescription.classList.remove("moving-text"), 1200);

// show description of first image
bannerDescription.innerText = images[index].getAttribute("alt");

// show number of first image
currentNumber.innerText = index + 1;

// show the total of images
totalNumber.innerText = images.length;

function changeBanner() {
    index++;
    changeImage();
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(changeBanner, 2500);
}

function changeImage() {
    if(index > images.length - 1) {
        index = 0;
    }
    else if(index < 0) {
        index = images.length - 1;
    }

    // working on the "banner__images" container
    // bannerImages.style.transform = `translateX(${-index * 25}%)`;
    // bannerImages.style.transform = `translateX(${-index * (100 / (images.length))}%)`;

    // looping through all images and move each one
    images.forEach((img) => img.style.transform = `translateX(${-index * 100}%)`);

    // show description of current image
    bannerDescription.innerText = images[index].getAttribute("alt");

    // generate the effect of description for every image
    bannerDescription.classList.add("moving-text");
    setTimeout(() => bannerDescription.classList.remove("moving-text"), 1000);

    // show number of current image on each interation
    currentNumber.innerText = index + 1;
}

leftButton.addEventListener("click", () => {
    index--;
    resetInterval();
    changeImage();
});

rightButton.addEventListener("click", () => {
    index++;
    resetInterval();
    changeImage();
});