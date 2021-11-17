// console.log("HEYYY")
const header = document.querySelector("header")

document.addEventListener("scroll", () => {
    // console.dir(window) /* like console.log */
    const {pageYOffset} = window;
    if(pageYOffset > 80){
        header.classList.add("shrink-header")
    } else {
        header.classList.remove("shrink-header")
    }
})