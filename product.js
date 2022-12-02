const body = document.querySelector('body')
const modalYes = document.querySelector('.btn-yes')
const modalNo = document.querySelector('.btn-no')
const modal = document.querySelector('.modal-container')
const ul = document.querySelector('.product ul')
const add = document.querySelectorAll('.add')
const minus = document.querySelectorAll('.minus')
const count = document.querySelectorAll('.count-product')

const product = JSON.parse(localStorage.getItem('products'))
// console.log(product[0].id)
function load(arr) {
    ul.innerHTML = ''
    for(let i = 0; i < arr.length; i++) {
        const item = arr[i]
        ul.innerHTML += `
        <li> 
        <img src="${arr[i].imglink}">
        <a><h5>Name: ${arr[i].productname}</h5></a>
        <p>Price: ${arr[i].productprice} $</p>

        </div>
        <button type="Submit" class="button-buy"><a href="./product-info.html#${arr[i].id}">Details</a></button>

        <button type="Submit" class="button-remove">Remove</button>
        
        </li>
        `
    }
}
if(product.length === 0) {
    ul.innerHTML = '<p>Danh sách sản phẩm trống, hãy thêm nó trong phần Admin</p>'
}
else {
    load(product)
    const remove = document.querySelectorAll('.button-remove')
    for(let i= 0; i < remove.length; i++) {
        remove[i].addEventListener('click', () => {
                modal.style.display = 'flex'
                modalYes.addEventListener('click', () => {
                    product.splice(i,1)
                    localStorage.setItem("products", JSON.stringify(product))
                    load(product)
                    location.reload()
                })
                modalNo.addEventListener('click', () => {
                    modal.style.display = 'none'
                })
            }
        )
    }
    for(let i = 0; i < add.length; i++) {
        add[i].addEventListener("click", () => {
            console.log(count[i].textContent());
        })
    }
}

