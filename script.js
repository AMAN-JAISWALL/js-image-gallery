console.log("image gallery");

let scrollContainer = document.querySelector(".gallery");
let nextBtn = document.querySelector("#nextBtn");
let backBtn = document.querySelector("#backBtn");

// this blcok for mouse wheel uo-down(mouse scrollbar)
// scrollContainer.addEventListener('wheel',(evt)=>{
//     evt.preventDefault();
//     // console.log(evt);
//     scrollContainer.scrollLeft += evt.deltaY;
// scrollContainer.style.scrollBehavior = "auto";

// })


nextBtn.addEventListener("click",()=>{
    // console.log("click on nextBTn");

    scrollContainer.scrollLeft +=900
    scrollContainer.style.scrollBehavior = "smooth"

})


backBtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft -=900;
    scrollContainer.style.scrollBehavior = "smooth"
})