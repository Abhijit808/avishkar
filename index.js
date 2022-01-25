let a = document.querySelector(".burger");
let b = document.querySelector(".vhidden");
let c = document.querySelector(".links");
let d = document.querySelector(".vhidden");
let e = document.querySelector(".nlinks");
let f = document.querySelector(".limg");
let i = document.querySelector(".w1");
let g = document.querySelector(".w2");
let h = document.querySelector(".w3");

function ftn() {
    c.classList.toggle("links");
    if (f.style.margin === "auto") {
        f.style.margin = "0 1.4324rem";
    } else {
        f.style.margin = "auto"
    }
    //    if (i.style.display === "block")

    console.log(i.style.display);
    if (i.style.display === "none" && g.style.transform === "rotate(132deg)" && h.style.transform === " rotate(45deg) translate(-12px,-12px)") {
        i.style.display = "block";
        g.style.transform = "rotate(0deg)"
        h.style.transform = " rotate(0deg) ";
        console.log("hello");
    }
    // else{
    //     i.style.display = "none";
    //     g.style.transform = "rotate(132deg)"
    //     h.style.transform =" rotate(45deg) translate(-12px,-12px)";  
    // }   

    e.style.transition = "all 5s ease-in 0"
}