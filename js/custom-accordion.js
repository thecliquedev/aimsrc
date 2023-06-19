var acc = document.getElementsByClassName("slider-accordion");

// var acc_sec = document.getElementsByClassName("slider-accordion-sec");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   
    this.classList.toggle("slider-accordion-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
   
  });
}

var acc2 = document.getElementsByClassName("slider-accordion .hospital-acc");

// var acc_sec = document.getElementsByClassName("slider-accordion-sec");

var i;

for (i = 0; i < acc2.length; i++) {
  acc2[i].addEventListener("click", function() {
   
    this.classList.toggle("slider-accordion-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
   
  });
}