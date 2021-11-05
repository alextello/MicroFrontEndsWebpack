import("products/ProductsIndex")
    .then(module => {
        module.mount(document.querySelector("#my-products"))
    })
    .catch(err => {
        console.log("Error in Loading Products!!")
    });

import("cart/CartShow")
    .then(module => {
        module.mount(document.querySelector("#my-cart"))
    })
    .catch(err => {
        console.log("Error in Loading Products!!")
    });
