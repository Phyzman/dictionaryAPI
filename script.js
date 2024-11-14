// let goods = document.getElementById("showProducts");
let goods = document.getElementById("showProducts");
let result = ""; 
let cart = [];
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
   
    for (let i = 0; i < data.products.length; i++) {
      const product = data.products[i];
      
      result += `
        <div class="card">
          <div class="im"><img src="${product.images[0]}" alt="${product.brand}"></div>
          <p class="bran">${product.title}</p>

          <p class="bran"><span>Brand: </span>${product.brand}</p>
          <p class="ta"><span>Tags: </span>${product.tags.join(", ")}</p>
          <p class="des"><span>Description: </span>${product.description}</p>
          <p class="pric"><span>Price: </span>: $${product.price}</p>
          <button onclick ="AddCart(${product.id}, '${product.title}', ${(product.id ).toFixed(2)})">Add to cart</button>
        </div>
      `;
    }
    goods.innerHTML = result;
    console.log("result is here:", result);

    console.log(data)
  });


  function AddCart(id, title, price){
    cart.push({id, title, price})
    UpdateCart()
  }


  function UpdateCart(){
    const cartElement = document.getElementById('cart');
    if (cart.length == 0) {
      cartElement.innerHTML= "No product"
      console.log("empty cart");
      
    }else{
      cartElement.innerHTML= cart.map(item => `<p>${item.title} - $${item.price}</p>`).join('');
      const totalprice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
      cartElement.innerHTML += `<p>${totalprice}</p>`
    }
  }


 