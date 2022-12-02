const productName = document.querySelector("body h4")
const productPrice = document.querySelector(".product-price")
const productDes = document.querySelector(".p-des")
const productImg = document.querySelector(".product-des img")
const products = JSON.parse(localStorage.getItem('products'))
const productID = location.hash.replace('#',"")
const addToCart = document.querySelector(".add-to-cart")
const amountProduct   = document.querySelector(".count")
function findProduct() {
    for(let i  = 0; i < products.length; i++) {
        if(products[i].id === productID) {
            return products[i]
        }
    }
}
console.log(findProduct());
productName.textContent = findProduct().productname
productPrice.textContent = `Giá: ${findProduct().productprice} $`
productDes.textContent = findProduct().description
productImg.src = findProduct().imglink
// console.log(amountProduct.textContent);
addToCart.addEventListener("click", () => {
    p = findProduct();
    p.quantity = amountProduct.textContent
    if(!localStorage.getItem("cart")) {
        const productsList = [p];
        localStorage.setItem("cart", JSON.stringify(productsList));
    }
    else {
        const oldListJson = localStorage.getItem('cart');
        const existingList = JSON.parse(oldListJson)
        for(let i = 0; i < existingList.length; i++) {
            if(p.id === existingList[i].id) {
                existingList[i].quantity = Number(existingList[i].quantity) + Number(p.quantity)
                localStorage.setItem("cart", JSON.stringify(existingList))        
                return
            }
            // else {  
            //     existingList.push(p)
            // }
        }
        existingList.push(p)
        localStorage.setItem("cart", JSON.stringify(existingList))        
    }
})
