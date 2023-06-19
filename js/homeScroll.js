let scrollContainer = document.querySelector(".scroll-doctor");
let scrollContainer2 = document.querySelector(".scroll-doctor2");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
let backBtn2 = document.getElementById("backBtn2");
let nextBtn2 = document.getElementById("nextBtn2");

scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.style.scrollBehavior = "auto";
    scrollContainer.scrollLeft += e.deltaY;
})

scrollContainer2.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer2.style.scrollBehavior = "auto";
    scrollContainer2.scrollLeft += e.deltaY;
})

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 275;
})

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 275;
})

nextBtn2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft += 275;
})

backBtn2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft -= 275;
})


