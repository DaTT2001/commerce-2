const add = document.querySelector(".add-product")
const minus = document.querySelector(".minus-product")
const count = document.querySelector(".count")
let a = 1

add.addEventListener(('click'), () => {
    a++
    count.textContent = a;
})
minus.addEventListener(('click'), () => {
    if(a < 2) return
    a--
    count.textContent = a;
})